import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import {
    setTimeLineError,
    setTimeLineData,
    setOnlineFriendsData,
    setOnlineFriendsError,
    postProfileDataToDatabaseError
} from './actions';

const PROFILE_DATA_URL = '/api/profile';
const TIMELINE_DATA_URL = '/api/posts';
const PROFILE_URL = '../../../static/data/profiles.json';
const {
    REQUEST_LOAD_TIMELINE_DATA,
    REQUEST_LOAD_ONLINE_FRIENDS_DATA,
    POST_PROFILE_DATA_TO_DATABASE,
} = actionTypes;

function* handleTimeLineDataLoad() {
    const response = yield call(fetch, TIMELINE_DATA_URL);
    if (response.ok) {
        const data = yield response.json();
        yield put(setTimeLineData(data));
    } else {
        yield put(setTimeLineError(response.statusText));
    }
}

function* handleProfileDataLoad() {
    const response = yield call(fetch, PROFILE_URL);
    if (response.ok) {
        const data = yield response.json();
        yield put(setOnlineFriendsData(data));
    } else {
        yield put(setOnlineFriendsError(response));
    }
}

function* handleProfileDataPost({ payload }) {
    const response = yield call(fetch, PROFILE_DATA_URL, {
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });
    const data = yield response.json();
    if (response.ok) {
        yield put(postProfileDataToDatabaseError(data));
    } else {
        yield put(postProfileDataToDatabaseError(data));
    }
}

// watcher
export default function* watchTimelineDataLoad() {
    yield takeEvery(REQUEST_LOAD_TIMELINE_DATA, handleTimeLineDataLoad);
    yield takeEvery(REQUEST_LOAD_ONLINE_FRIENDS_DATA, handleProfileDataLoad);
    yield takeEvery(POST_PROFILE_DATA_TO_DATABASE, handleProfileDataPost);
}
