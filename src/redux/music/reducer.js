import {GET_MUSIC} from './types';
import F from '../../utils/func';

const initialState = {
    songs: []
};

const handleReducer = {
    [GET_MUSIC]: (state, {payload}) => ({
        ...state,
        songs: [...payload]
    })
};

export default F.createReducer(handleReducer, initialState);