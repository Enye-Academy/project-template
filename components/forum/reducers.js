import actionTypes from './actionTypes';

const initialState = {
    error: undefined,
    forumData: [],
    isForumDataLoading: false,
};

export default (state = initialState, action) => {
    const {
        REQUEST_LOAD_FORUM_DATA, REQUEST_SET_FORUM_DATA_ERROR, REQUEST_SET_FORUM_DATA_SUCCESS,
    } = actionTypes;
    const { type, error, payload } = action;

    switch (type) {
    case REQUEST_LOAD_FORUM_DATA:
        return { ...state, isForumDataLoading: true };

    case REQUEST_SET_FORUM_DATA_ERROR:
        return { ...state, error, isForumDataLoading: false };

    case REQUEST_SET_FORUM_DATA_SUCCESS:
        return { ...state, forumData: payload, isForumDataLoading: false };
    default:
        return state;
    }
};
