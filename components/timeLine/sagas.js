import {
    takeEvery, call, put
} from 'redux-saga/effects';
import actionTypes from './actionTypes';
import { setTimeLineError, setTimeLineData } from './actions';
import { fetchTimeLineData } from './utils';

const {
    FETCH_TIMELINE_REQUEST,
} = actionTypes;

function* handleTimeLineDataLoad() {
    try {
        const data = yield call(fetchTimeLineData);
        yield put(setTimeLineData(data));
    } catch (error) {
        yield put(setTimeLineError(error.toString()));
    }
}

// watcher
export default function* watchTimelineDataLoad() {
    yield takeEvery(FETCH_TIMELINE_REQUEST, handleTimeLineDataLoad);
}
