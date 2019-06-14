import {
    takeEvery, call, put
} from 'redux-saga/effects';
import actionTypes from './actionTypes';
import {
    registrationRequestSuccess,
    registrationRequestError
} from './actions';

const REGISTRATION_URL = '/api/users/register';

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
    const data = yield response.json();
    if (response.ok) {
        yield put(registrationRequestSuccess(data));
    } else {
        yield put(registrationRequestError(data));
    }
}

export default function* watchRegistrationAction() {
    yield takeEvery(SEND_REGISTRATION_REQUEST, handleUserRegistration);
}
