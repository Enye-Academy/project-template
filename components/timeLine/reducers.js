import actionTypes from './actionTypes';

const initialState = {
    error: undefined,
    isOnlineFriendsFetching: false,
    isTimelineFetching: false,
    onlineFriendsData: [],
    timelineData: [],
};
export default (state = initialState, action) => {
    const {
        FETCH_TIMELINE_REQUEST,
        FETCH_TIMELINE_DATA_FAILURE,
        FETCH_TIMELINE_DATA_SUCCESS,
        FETCH_ONLINE_USERS_FAILURE,
        FETCH_ONLINE_USERS_REQUEST,
        FETCH_ONLINE_USERS_SUCCESS,
        ADD_POST_TO_TIMELINE,
        ADD_COMMENT_TO_POST,
        TOGGLE_POST_LIKE,
        TOGGLE_POST_FAV,
        TOGGLE_COMMENT_BUTTON,
    } = actionTypes;

    const {
        type, error, payload,
    } = action;

    let newArray = [];

    switch (type) {
    case FETCH_TIMELINE_REQUEST:
        return { ...state, isTimelineFetching: true };

    case FETCH_TIMELINE_DATA_SUCCESS:
        return { ...state, isTimelineFetching: false, timelineData: payload };

    case FETCH_TIMELINE_DATA_FAILURE:
        return { ...state, error, isTimelineFetching: false };

    case FETCH_ONLINE_USERS_REQUEST:
        return { ...state, isOnlineFriendsFetching: true };

    case FETCH_ONLINE_USERS_SUCCESS:
        return { ...state, isOnlineFriendsFetching: false, onlineFriendsData: payload };

    case FETCH_ONLINE_USERS_FAILURE:
        return { ...state, error, isOnlineFriendsFetching: false };

    case ADD_POST_TO_TIMELINE:
        return payload.post !== ''
            ? { ...state, timelineData: [payload, ...state.timelineData] } : state;

    case ADD_COMMENT_TO_POST:
        newArray = state.timelineData.map(item => {
            if (item.id === payload.id) {
                item.comments = [{ ...payload, id: item.comments.length + 1 }, ...item.comments];
            }
            return item;
        });
        return {
            ...state,
            timelineData: [...newArray],
        };

    case TOGGLE_POST_LIKE:
        newArray = state.timelineData.map(item => {
            const { id, liked, likes } = item;
            if (id === payload) {
                item.liked = !liked;
                item.likes = liked ? likes - 1 : likes + 1;
            }
            return item;
        });
        return {
            ...state,
            timelineData: [...newArray],
        };

    case TOGGLE_POST_FAV:
        newArray = state.timelineData.map(item => {
            const { id, favourited, favouriteCount } = item;
            if (id === payload) {
                item.favourited = !favourited;
                item.favouriteCount = favourited ? favouriteCount - 1 : favouriteCount + 1;
            }
            return item;
        });
        return { ...state, timelineData: [...newArray] };

    case TOGGLE_COMMENT_BUTTON:
        newArray = state.timelineData.map(item => {
            const { id, isCommentOpen } = item;
            if (id === payload) {
                item.isCommentOpen = !isCommentOpen;
            }
            return item;
        });
        return { ...state, timelineData: [...newArray] };
    default:
        return state;
    }
};
