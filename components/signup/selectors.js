import { STRINGS } from './constants';

const { NAME } = STRINGS;

export const getError = state => state[NAME].error;
export const getIsRegistering = state => state[NAME].isRegistering;
export const getPayload = state => state[NAME].payload;
export const getSuccess = state => state[NAME].success;
