import {ADD_NOTE} from "./types"

const initialState = {
    notes: [],
};

const handleReducer = {
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
};

const reducer = (state = initialState, action) => {
    const handler = handleReducer[action.type];
    return handler ? handler(state, action) : state;
};

export default reducer;