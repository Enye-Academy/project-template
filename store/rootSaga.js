import { all } from 'redux-saga/effects';
import { timeLineSagas } from '../components/timeLine';
import { forumSagas } from '../components/forum';
import { signupSagas } from '../components/signup';
import { authSagas } from '../components/authentication';

export default function* rootSaga() {
    yield all([authSagas(), timeLineSagas(), forumSagas(), signupSagas()]);
}
