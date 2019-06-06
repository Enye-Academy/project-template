import { STRINGS } from './constants';

const { NAME } = STRINGS;
export const getIsOpen = state => state[NAME].isOpen;
export const getStatusValue = state => state[NAME].statusValue;
export const getTimelineData = state => state[NAME].timelineData;
