import { combineReducers } from 'redux';
import * as timeLine from '../components/timeLine';
import * as forum from '../components/forum';
import * as signup from '../components/signup';

const rootReducer = combineReducers({
    forum: forum.reducers,
    signup: signup.reducers,
    timeLine: timeLine.reducers,
});

export default rootReducer;
