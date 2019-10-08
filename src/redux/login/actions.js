import {SIGN_IN} from './types';

export const signIn = (name) => ({
    type: SIGN_IN,
    payload: name
});