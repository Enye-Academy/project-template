import { combineReducers } from 'redux';
import * as timeLine from '../components/timeLine';
import * as forum from '../components/forum';

const rootReducer = combineReducers({
    forum: forum.reducers,
    timeLine: timeLine.reducers,
});

export default rootReducer;
