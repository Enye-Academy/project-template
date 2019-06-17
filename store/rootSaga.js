import { all } from 'redux-saga/effects';
import { timeLineSagas } from '../components/timeLine';
import { forumSagas } from '../components/forum';
import { signupSagas } from '../components/signup';

export default function* rootSaga() {
    yield all([timeLineSagas(), forumSagas(), signupSagas()]);
}
