/* eslint-disable import/prefer-default-export */
import actionTypes from './actionTypes';

const initialState = {
    error: undefined,
    isFetching: false,
    isOpen: false,
    statusValue: '',
    timelineData: [],
};

export const reducers = (state = initialState, action) => {
    const {
        CLEAR_STATUS_FIELD,
        FETCH_PROFILE_REQUEST,
        FETCH_PROFILE_DATA_FAILURE,
        FETCH_PROFILE_DATA_SUCCESS,
        TOGGLE_MODAL,
        UPDATE_STATUS,
        ADD_POST_TO_TIMELINE,
    } = actionTypes;

    const {
        type, timelineData, error, payload,
    } = action;

    const { isOpen } = state;

    switch (type) {
    case FETCH_PROFILE_REQUEST:
        return { ...state, isFetching: true };
    case FETCH_PROFILE_DATA_SUCCESS:
        return { ...state, isFetching: false, timelineData };
    case FETCH_PROFILE_DATA_FAILURE:
        return { ...state, error, isFetching: false };
    case TOGGLE_MODAL:
        return { ...state, isOpen: !isOpen };
    case ADD_POST_TO_TIMELINE:
        return payload.post !== '' ? { ...state, timelineData: [payload, ...state.timelineData] } : state;
    case UPDATE_STATUS:
        return { ...state, statusValue: payload };
    case CLEAR_STATUS_FIELD:
        return { ...state, statusValue: '' };
    default:
        return state;
    }
};
