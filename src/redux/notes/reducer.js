import {ADD_NOTE, DELETE_NOTE} from "./types";

const initialState = {
    notes: [],
};

const handleReducer = {
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
    [DELETE_NOTE]: (state, {payload}) => ({
        notes: [...state.notes.filter(it => it.id !== payload)]
    })
};

const reducer = (state = initialState, action) => {
    const handler = handleReducer[action.type];
    return handler ? handler(state, action) : state;
};

export default reducer;