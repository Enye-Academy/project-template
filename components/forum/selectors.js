import { STRINGS } from './constants';

const { NAME } = STRINGS;

export const getError = state => state[NAME].error;
export const getForumData = state => state[NAME].forumData;
export const getIsForumDataLoading = state => state[NAME].isForumDataLoading;
