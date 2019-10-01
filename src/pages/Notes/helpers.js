import * as R from 'ramda';
import * as action from '../../redux/notes/actions';
import generateId from 'nanoid';

export const addNote = (note) => (dispatch) => {
    const noteWithId = {...note, id: generateId()};
    const notes = R.pipe(
        R.defaultTo('[]'),
        JSON.parse
    )(localStorage.getItem('notes'));
    const allNotes = [...notes, noteWithId];
    localStorage.setItem('notes', JSON.stringify(allNotes));
    dispatch(action.addNote(noteWithId));
};

export const deleteNote = (id) => (dispatch, getState) => {
    const {notes} = getState().notesReducer;
    const isAnotherId = it => it.id !== id;
    const updateNotes = R.filter(isAnotherId, notes);
    localStorage.setItem('notes', JSON.stringify(updateNotes));
    dispatch(action.updateNote(updateNotes));
};

export const saveNote = (id, note) => (dispatch, getState) => {
    const {notes} = getState().notesReducer;
    const noteWithId = R.find(R.propEq('id', id))(notes);
    const newNote = R.mergeDeepRight(noteWithId, note);
    const noteIndex = R.indexOf(noteWithId, notes);
    notes[noteIndex] = newNote;
    localStorage.setItem('notes', JSON.stringify(notes));
    dispatch(action.updateNote(notes));

};