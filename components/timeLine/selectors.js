import { STRINGS } from './constants';

const { NAME } = STRINGS;
export const getError = state => state[NAME].error;
export const getIsOnlineFriendsFetching = state => state[NAME].isOnlineFriendsFetching;
export const getIsTimelineFetching = state => state[NAME].isTimelineFetching;
export const getOnlineFriendsData = state => state[NAME].onlineFriendsData;
export const getTimelineData = state => state[NAME].timelineData;
export const getUserProfile = state => state[NAME].userProfile;
