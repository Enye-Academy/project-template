import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import { setForumDataError, setForumDataSuccess } from './actions';

const FORUM_DATA_URL = '../../static/data/forumData.json';
const { REQUEST_LOAD_FORUM_DATA } = actionTypes;

function* handleForumDataLoad() {
    const response = yield call(fetch, FORUM_DATA_URL);
    if (response.ok) {
        const data = yield response.json();
        yield put(setForumDataSuccess(data));
    } else {
        yield put(setForumDataError(response));
    }
}

// forum data watcher
export default function* watchForumDataLoad() {
    yield takeEvery(REQUEST_LOAD_FORUM_DATA, handleForumDataLoad);
}
