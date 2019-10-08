import {UPDATE_SEARCH_COUNTER, UPDATE_PLAY_COUNTER} from './types';
import F from '../../utils/func';

const initialState = {
    artists: {}
};

const handleReducer = {
    [UPDATE_SEARCH_COUNTER]: (state, {payload}) => ({
        ...state,
        artists: {
            ...state.artists,
            [payload.artistName]: payload
        }
    }),
    [UPDATE_PLAY_COUNTER]: (state, {payload}) => ({
        ...state,
        artists: {
            ...state.artists,
            [payload.artistName]: payload
        }
    })
};

export default F.createReducer(handleReducer, initialState)