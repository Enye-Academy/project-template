import actionTypes from './actionTypes';

const {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    GET_USER_PROFILE,
} = actionTypes;

export const loginFailure = () => ({
    type: LOGIN_FAILURE,
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});

export const getUserProfile = payload => ({
    payload,
    type: GET_USER_PROFILE,
});
