import { STRINGS } from './constants';

const { NAME } = STRINGS;
export const getStatusValue = state => state[NAME].statusValue;
export const getTimelineData = state => state[NAME].timelineData;
export const getIsFetching = state => state[NAME].isFetching;
