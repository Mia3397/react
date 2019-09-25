import { UPDATE_DATA } from './types';

const initialState = {
    data: []
};

const handleReducer = {
    [UPDATE_DATA]: (state, {payload}) => ({
            ...state,
            data: [...payload]
        })
};

const reducer = (state = initialState, action) => {
    const handler = handleReducer[action.type];
    return handler ? handler(state, action) : state;
};

export default reducer;