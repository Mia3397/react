import {UPDATE_USERS} from './types';

export const updateUsersData = (updateUsersData) => ({
    type: UPDATE_USERS,
    payload: updateUsersData
});