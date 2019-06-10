import actionTypes from './actionTypes';

const initialState = {
    error: undefined,
    isFetching: false,
    isOpen: false,
    statusValue: '',
    timelineData: [],
};
export default (state = initialState, action) => {
    const {
        CLEAR_STATUS_FIELD,
        FETCH_PROFILE_REQUEST,
        FETCH_PROFILE_DATA_FAILURE,
        FETCH_PROFILE_DATA_SUCCESS,
        UPDATE_STATUS,
        ADD_POST_TO_TIMELINE,
        ADD_COMMENT_TO_POST,
        TOGGLE_POST_LIKE,
        TOGGLE_POST_FAV,
        TOGGLE_COMMENT_BUTTON,
    } = actionTypes;

    const {
        type, error, payload, timelineData,
    } = action;

    let newArray = [];

    switch (type) {
    case FETCH_PROFILE_REQUEST:
        return { ...state, isFetching: true };

    case FETCH_PROFILE_DATA_SUCCESS:
        return { ...state, isFetching: false, timelineData };

    case FETCH_PROFILE_DATA_FAILURE:
        return { ...state, error, isFetching: false };

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

    case UPDATE_STATUS:
        return { ...state, statusValue: payload };

    case CLEAR_STATUS_FIELD:
        return { ...state, statusValue: '' };

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
