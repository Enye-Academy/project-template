import {
    takeEvery, call, put
} from 'redux-saga/effects';
import actionTypes from './actionTypes';
import {
    setTimeLineError, setTimeLineData, setOnlineFriendsData, setOnlineFriendsError
} from './actions';
import { fetchTimeLineData, fetchProfileData } from './utils';

const {
    REQUEST_LOAD_TIMELINE_DATA,
    REQUEST_LOAD_ONLINE_FRIENDS_DATA,
} = actionTypes;

function* handleTimeLineDataLoad() {
    try {
        const data = yield call(fetchTimeLineData);
        yield put(setTimeLineData(data));
    } catch (error) {
        yield put(setTimeLineError(error.toString()));
    }
}

function* handleProfileDataLoad() {
    try {
        const data = yield call(fetchProfileData);
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
