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
    const response = yield call(fetch, TIMELINE_DATA_URL);
    const data = yield response.json();
    if (response.ok) {
        yield put(setTimeLineData(data));
    } else {
        yield put(setTimeLineError(response));
    }
}

function* handleProfileDataLoad() {
    const response = yield call(fetch, PROFILE_URL);
    const data = yield response.json();
    if (response.ok) {
        yield put(setOnlineFriendsData(data));
    } else {
        yield put(setTimeLineError(response));
    }
}

// watcher
export default function* watchTimelineDataLoad() {
    yield takeEvery(REQUEST_LOAD_TIMELINE_DATA, handleTimeLineDataLoad);
    yield takeEvery(REQUEST_LOAD_ONLINE_FRIENDS_DATA, handleProfileDataLoad);
}
