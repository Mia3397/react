import { TOGGLE_STATE } from './types';

const initialState = {
    isOpen: false,
};

const handleReducer = {
    [TOGGLE_STATE]: (state) => ({
        ...state,
        isOpen: !state.isOpen
    }),
};

const reducer = (state = initialState, action) => handleReducer[action.type] ? handleReducer[action.type](state) : handleReducer;

export default reducer;
