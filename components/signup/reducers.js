import actionTypes from './actionTypes';

const initialState = {
    error: null,
    isRegistering: false,
    payload: null,
    success: null,
};

export default (state = initialState, action) => {
    const {
        REGISTRATION_REQUEST_ERROR,
        REGISTRATION_REQUEST_SUCCESS,
        SEND_REGISTRATION_REQUEST,
    } = actionTypes;

    const { type, payload } = action;

    switch (type) {
    case SEND_REGISTRATION_REQUEST:
        return { ...state, isRegistering: true };

    case REGISTRATION_REQUEST_SUCCESS:
        return { ...state, isRegistering: false, success: payload };

    case REGISTRATION_REQUEST_ERROR:
        return { ...state, error: payload, isRegistering: false };
    default:
        return state;
    }
};
