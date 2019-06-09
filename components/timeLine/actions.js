import actionTypes from './actionTypes';

const {
    FETCH_PROFILE_REQUEST, FETCH_PROFILE_DATA_FAILURE, FETCH_PROFILE_DATA_SUCCESS,
    UPDATE_STATUS, ADD_POST_TO_TIMELINE, TOGGLE_POST_LIKE, TOGGLE_POST_FAV, TOGGLE_COMMENT_BUTTON,
} = actionTypes;

export const setPostUpdateField = text => ({ payload: text, type: UPDATE_STATUS });

// Instead of plain objects, we are returning function.
export const fetchProfileData = () => dispatch => {
    // Dispatching REQUEST action, which tells our app, that we are started requesting todos.
    dispatch({
        type: FETCH_PROFILE_REQUEST,
    });
    return fetch('../../static/data/timelineData.json')
    // Here, we are getting json body from server response
    // And providing `response` and `body` variables to the next chain.
        .then(response => response.json()
            .then(body => ({ body, response })))
        .then(({ response, body }) => {
            if (!response.ok) {
                // If request was failed, dispatching FAILURE action.
                dispatch({
                    error: body.error,
                    type: FETCH_PROFILE_DATA_FAILURE,
                });
            } else {
                // When everything is ok, dispatching SUCCESS action.
                dispatch({
                    timelineData: body,
                    type: FETCH_PROFILE_DATA_SUCCESS,
                });
            }
        });
};

export const handlePostUpdate = data => ({
    payload: data,
    type: ADD_POST_TO_TIMELINE,
});

export const likeButtonClicked = id => ({
    payload: id,
    type: TOGGLE_POST_LIKE,
});

export const favButtonClicked = id => ({
    payload: id,
    type: TOGGLE_POST_FAV,
});

export const commentButtonClicked = id => ({
    payload: id,
    type: TOGGLE_COMMENT_BUTTON,
});
