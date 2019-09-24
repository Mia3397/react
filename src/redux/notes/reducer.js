import {ADD_NOTE, UPDATE_NOTE} from "./types";

const localNotes = localStorage.getItem('notes');

const initialState = {
    notes: localNotes ? JSON.parse(localNotes) : []
};

const handleReducer = {
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
    [UPDATE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: payload
    })
};

const reducer = (state = initialState, action) => {
    const handler = handleReducer[action.type];
    return handler ? handler(state, action) : state;
};

export default reducer;