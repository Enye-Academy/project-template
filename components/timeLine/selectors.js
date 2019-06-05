/* eslint-disable import/prefer-default-export */
import { NAME } from './constants';

export const getIsOpen = state => state[NAME].isOpen;
export const getStatusValue = state => state[NAME].statusValue;
export const getTimelineData = state => state[NAME].timelineData;
