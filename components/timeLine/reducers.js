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
        TOGGLE_POST_LIKE,
        TOGGLE_POST_FAV, TOGGLE_COMMENT_BUTTON
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
        return payload.post !== ''
            ? { ...state, timelineData: [payload, ...state.timelineData] }
            : state;
    case UPDATE_STATUS:
        return { ...state, statusValue: payload };
    case CLEAR_STATUS_FIELD:
        return { ...state, statusValue: '' };
    case TOGGLE_POST_LIKE:
        state.timelineData.map(item => {
            const {id, liked, likes} = item
            if (id === payload) 
            { 
                item['liked'] = !item['liked']; 
                if(!liked){
                    item['likes'] = likes + 1
                }else if(liked){
                   item['likes'] = likes - 1
                }
            }
        });
        return {
            ...state,
            timelineData : [...state.timelineData], 
        };
        case TOGGLE_POST_FAV:
                state.timelineData.map(item => {
                    const {id, favourited, favouriteCount} = item
                    if (item.id === payload) 
                    { 
                        item.favourited = !item.favourited; 
                        if(item.favourited){
                            item.favouriteCount = item.favouriteCount + 1
                        }else if(!item.favourite){
                           item.favouriteCount = item.favouriteCount - 1
                        }
                    }
                });
        return {
            ...state,
            timelineData : [...state.timelineData], 
        };
        case TOGGLE_COMMENT_BUTTON:
                state.timelineData.map(item => {
                    const {id, isCommentOpen} = item
                    if (item.id === payload) 
                    { 
                        item.isCommentOpen = !item.isCommentOpen; 
                    }
                });
        return {
            ...state,
            timelineData : [...state.timelineData], 
        };
    default:
        return state;
    }
};
