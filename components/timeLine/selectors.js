import { STRINGS } from './constants';

const { NAME } = STRINGS;
export const getStatusValue = state => state[NAME].statusValue;
export const getTimelineData = state => state[NAME].timelineData;
