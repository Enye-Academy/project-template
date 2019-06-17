import { takeEvery, put } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import { getUserProfile } from './actions';

const { LOGIN_SUCCESS } = actionTypes;

function* handleGetUserProfile(payload) {
    yield put(getUserProfile(payload));
}

export default function* watchProfileDataLoad() {
    yield takeEvery(LOGIN_SUCCESS, handleGetUserProfile);
}
