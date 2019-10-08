import {SIGN_IN} from './types';
import F from '../../utils/func';

const initialState = {
    userName: null
};

const handleReducer = {
    [SIGN_IN]: (state, {payload}) => ({
        ...state,
        userName: payload
    })
};

export default F.createReducer(handleReducer, initialState);