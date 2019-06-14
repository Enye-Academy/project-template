import actionTypes from './actionTypes';

const {
    REQUEST_LOAD_FORUM_DATA, REQUEST_SET_FORUM_DATA_ERROR, REQUEST_SET_FORUM_DATA_SUCCESS,
} = actionTypes;

export const loadForumData = () => ({
    type: REQUEST_LOAD_FORUM_DATA,
});

export const setForumDataError = payload => ({
    payload,
    type: REQUEST_SET_FORUM_DATA_ERROR,
});

export const setForumDataSuccess = payload => ({
    payload,
    type: REQUEST_SET_FORUM_DATA_SUCCESS,
});
