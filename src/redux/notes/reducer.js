import { ADD_NOTE, UPDATE_NOTE } from './types';
import F from '../../utils/func';

const localNotes = localStorage.getItem('notes');

const initialState = {
  notes: localNotes ? JSON.parse(localNotes) : []
};

const handleReducer = {
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [UPDATE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: payload
  })
};

export default F.createReducer(handleReducer, initialState);
