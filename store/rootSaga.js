import { all } from 'redux-saga/effects';
import { timeLineSagas } from '../components/timeLine';

export default function* rootSaga() {
    yield all([timeLineSagas()]);
}
