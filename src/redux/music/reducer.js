import {GET_MUSIC} from './types';

const initialState = {
    songs: []
};

const handleReducer = {
    [GET_MUSIC]: (state, {payload}) => ({
        ...state,
        songs: [...payload]
    })
};

const musicReducer = (state = initialState, action) => {
    const handler = handleReducer[action.type];
    return handler ? handler(state, action) : state;
};

export default musicReducer;