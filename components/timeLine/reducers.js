import actionTypes from './actionTypes';

const initialState = {
    error: null,
    isOnlineFriendsFetching: false,
    isTimelineFetching: false,
    onlineFriendsData: [],
    timelineData: [],
    userProfile: {},
};
export default (state = initialState, action) => {
    const {
        POST_PROFILE_DATA_TO_DATABASE,
        POST_PROFILE_DATA_TO_DATABASE_SUCCESS,
        POST_PROFILE_DATA_TO_DATABASE_ERROR,
        REQUEST_LOAD_TIMELINE_DATA,
        REQUEST_SET_TIMELINE_ERROR,
        REQUEST_SET_TIMELINE_DATA_SUCCESS,
        REQUEST_SET_ONLINE_FRIENDS_ERROR,
        REQUEST_LOAD_ONLINE_FRIENDS_DATA,
        REQUEST_SET_ONLINE_FRIENDS_DATA,
        ADD_POST_TO_TIMELINE,
        ADD_COMMENT_TO_POST,
        TOGGLE_LIKE_BUTTON_CLICKED,
        TOGGLE_FAV_BUTTON_CLICKED,
        TOGGLE_COMMENT_BUTTON_CLICKED,
    } = actionTypes;

    const {
        type, error, payload,
    } = action;

    let newArray = [];

    switch (type) {
    case REQUEST_LOAD_TIMELINE_DATA:
        return { ...state, isTimelineFetching: true };

    case REQUEST_SET_TIMELINE_DATA_SUCCESS:
        return { ...state, isTimelineFetching: false, timelineData: payload.data.postFound };

    case REQUEST_SET_TIMELINE_ERROR:
        return { ...state, error: payload, isTimelineFetching: false };

    case REQUEST_LOAD_ONLINE_FRIENDS_DATA:
        return { ...state, isOnlineFriendsFetching: true };

    case REQUEST_SET_ONLINE_FRIENDS_DATA:
        return { ...state, isOnlineFriendsFetching: false, onlineFriendsData: payload };

    case REQUEST_SET_ONLINE_FRIENDS_ERROR:
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

    case TOGGLE_LIKE_BUTTON_CLICKED:
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

    case TOGGLE_FAV_BUTTON_CLICKED:
        newArray = state.timelineData.map(item => {
            const { id, favourited, favouriteCount } = item;
            if (id === payload) {
                item.favourited = !favourited;
                item.favouriteCount = favourited ? favouriteCount - 1 : favouriteCount + 1;
            }
            return item;
        });
        return { ...state, timelineData: [...newArray] };

    case TOGGLE_COMMENT_BUTTON_CLICKED:
        newArray = state.timelineData.map(item => {
            const { id, isCommentOpen } = item;
            if (id === payload) {
                item.isCommentOpen = !isCommentOpen;
            }
            return item;
        });
        return { ...state, timelineData: [...newArray] };
    case POST_PROFILE_DATA_TO_DATABASE: return { ...state, isProfileUpdating: true };

    case POST_PROFILE_DATA_TO_DATABASE_SUCCESS:
        return { ...state, isProfileUpdating: false, userProfile: payload };

    case POST_PROFILE_DATA_TO_DATABASE_ERROR:
        return { ...state, error: payload, isProfileUpdating: false };

    default:
        return state;
    }
};
