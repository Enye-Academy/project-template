import {
    takeEvery, call, put
} from 'redux-saga/effects';
import actionTypes from './actionTypes';
import {
    registrationRequestSuccess,
    registrationRequestError
} from './actions';
import { STRINGS } from './constants';

const { REGISTRATION_URL } = STRINGS;
const {
    SEND_REGISTRATION_REQUEST,
} = actionTypes;

function* handleUserRegistration({ payload }) {
    const response = yield call(fetch, REGISTRATION_URL, {
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });
    if (response.ok) {
        const data = yield response.json();
        yield put(registrationRequestSuccess(data));
    } else {
        yield put(registrationRequestError(response));
    }
}

export default function* watchRegistrationAction() {
    yield takeEvery(SEND_REGISTRATION_REQUEST, handleUserRegistration);
}
