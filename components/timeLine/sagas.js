import {
    takeEvery, call, put
} from 'redux-saga/effects';
import actionTypes from './actionTypes';
import {
    setTimeLineError, setTimeLineData, setOnlineFriendsData, setOnlineFriendsError
} from './actions';

const TIMELINE_DATA_URL = '../../static/data/timelineData.json';
const PROFILE_URL = '../../../static/data/profiles.json';
const {
    REQUEST_LOAD_TIMELINE_DATA,
    REQUEST_LOAD_ONLINE_FRIENDS_DATA,
} = actionTypes;

function* handleTimeLineDataLoad() {
    try {
        const response = yield call(fetch, TIMELINE_DATA_URL);
        const data = yield response.json();
        yield put(setTimeLineData(data));
    } catch (error) {
        yield put(setTimeLineError(error));
    }
}

function* handleProfileDataLoad() {
    try {
        const response = yield call(fetch, PROFILE_URL);
        const data = yield response.json();
        yield put(setOnlineFriendsData(data));
    } catch (error) {
        yield put(setOnlineFriendsError(error.toString()));
    }
}

// watcher
export default function* watchTimelineDataLoad() {
    yield takeEvery(REQUEST_LOAD_TIMELINE_DATA, handleTimeLineDataLoad);
    yield takeEvery(REQUEST_LOAD_ONLINE_FRIENDS_DATA, handleProfileDataLoad);
}
