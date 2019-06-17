import actionTypes from './actionTypes';

const { GET_USER_PROFILE, LOGIN_FAILURE, LOGIN_SUCCESS } = actionTypes;

const initialState = {
    isAuthenticated: false,
    usersProfile: null,
};

export default (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
    case LOGIN_FAILURE:
        return { ...state, isAuthenticated: false };
    case LOGIN_SUCCESS:
        return { ...state, isAuthenticated: true };
    case GET_USER_PROFILE:
        return { ...state, usersProfile: payload };
    default:
        return state;
    }
};
