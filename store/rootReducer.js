import { combineReducers } from 'redux';
import * as timeLine from '../components/timeLine';

const rootReducer = combineReducers({
	timeLine: timeLine.reducers,
});

export default rootReducer;
