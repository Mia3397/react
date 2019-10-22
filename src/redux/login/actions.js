import {SIGN_IN, LOGOUT} from './types';

export const signIn = (name) => ({
    type: SIGN_IN,
    payload: name
});

export const logout = () => ({
    type: LOGOUT
});