import {
    takeEvery, call, put
} from 'redux-saga/effects';
import actionTypes from './actionTypes';
import {
    setTimeLineError, setTimeLineData, setOnlineFriendsData, setOnlineFriendsError
} from './actions';
import { fetchTimeLineData, fetchProfileData } from './utils';

const {
    FETCH_TIMELINE_REQUEST,
    FETCH_ONLINE_USERS_REQUEST,
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
    yield takeEvery(FETCH_TIMELINE_REQUEST, handleTimeLineDataLoad);
    yield takeEvery(FETCH_ONLINE_USERS_REQUEST, handleProfileDataLoad);
}
