import actionTypes from './actionTypes';

const {
    REGISTRATION_REQUEST_ERROR,
    REGISTRATION_REQUEST_SUCCESS,
    SEND_REGISTRATION_REQUEST,
} = actionTypes;

export const sendRegistrationRequest = payload => ({
    payload,
    type: SEND_REGISTRATION_REQUEST,
});

export const registrationRequestSuccess = payload => ({
    payload,
    type: REGISTRATION_REQUEST_SUCCESS,
});

export const registrationRequestError = payload => ({
    payload,
    type: REGISTRATION_REQUEST_ERROR,
});
