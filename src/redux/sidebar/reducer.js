import { TOGGLE_STATE } from './types';
import F from '../../utils/func';

const initialState = {
    isOpen: false,
};

const handleReducer = {
    [TOGGLE_STATE]: (state) => ({
        ...state,
        isOpen: !state.isOpen
    }),
};

export default F.createReducer(handleReducer, initialState);
