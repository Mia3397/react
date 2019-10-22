import * as R from 'ramda';
import generateId from 'nanoid';
import * as action from '../../redux/notes/actions';

export const addNote = (note) => (dispatch) => {
  const noteWithId = { ...note, id: generateId() };
  const notes = R.pipe(
    (key) => localStorage.getItem(key),
    R.defaultTo('[]'),
    JSON.parse
  )('notes');
  const allNotes = [...notes, noteWithId];
  localStorage.setItem('notes', JSON.stringify(allNotes));
  dispatch(action.addNote(noteWithId));
};

export const deleteNote = (id) => (dispatch, getState) => {
  const { notes } = getState().notesReducer;
  const isAnotherId = (it) => it.id !== id;
  const updateNotes = R.filter(isAnotherId, notes);
  localStorage.setItem('notes', JSON.stringify(updateNotes));
  dispatch(action.updateNote(updateNotes));
};

export const updateNoteById = (id, newValue, type) => (dispatch, getState) => {
  const { notes } = getState().notesReducer;
  const updateNotes = R.map((it) => {
    if (it.id !== id) return it;
    return {
      ...it,
      [type]: newValue
    };
  }, notes);
  localStorage.setItem('notes', JSON.stringify(updateNotes));
  dispatch(action.updateNote(updateNotes));
};
