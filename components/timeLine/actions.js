import actionTypes from './actionTypes';

const {
    ADD_COMMENT_TO_POST,
    ADD_POST_TO_TIMELINE,
    FETCH_TIMELINE_REQUEST,
    FETCH_TIMELINE_DATA_FAILURE,
    FETCH_TIMELINE_DATA_SUCCESS,
    TOGGLE_POST_LIKE,
    TOGGLE_POST_FAV,
    TOGGLE_COMMENT_BUTTON,
    UPDATE_STATUS,
} = actionTypes;

export const setPostUpdateField = text => ({ payload: text, type: UPDATE_STATUS });

export const loadTimeLineData = () => ({
    type: FETCH_TIMELINE_REQUEST,
});

export const setTimeLineError = payload => ({
    payload,
    type: FETCH_TIMELINE_DATA_FAILURE,
});

export const setTimeLineData = payload => ({
    payload,
    type: FETCH_TIMELINE_DATA_SUCCESS,
});

export const handlePostUpdate = payload => ({
    payload,
    type: ADD_POST_TO_TIMELINE,
});

export const handlePostComment = payload => ({
    payload,
    type: ADD_COMMENT_TO_POST,
});

export const likeButtonClicked = payload => ({
    payload,
    type: TOGGLE_POST_LIKE,
});

export const favButtonClicked = payload => ({
    payload,
    type: TOGGLE_POST_FAV,
});

export const commentButtonClicked = payload => ({
    payload,
    type: TOGGLE_COMMENT_BUTTON,
});
