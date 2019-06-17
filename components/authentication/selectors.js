import { NAME } from './constants';

export const getIsAuthenticated = state => state[NAME].isAuthenticated;
export const getUsersProfile = state => state[NAME].userProfile;
