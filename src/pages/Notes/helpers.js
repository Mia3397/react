import * as action from '../../redux/notes/actions';
import generateId from 'nanoid';

export const addNote = (note) => (dispatch) => {
    const noteWithId = {...note, id: generateId()};
    const localNotes = localStorage.getItem('notes') || JSON.stringify([]);
    const allNotes = [...JSON.parse(localNotes), noteWithId];
    localStorage.setItem('notes', JSON.stringify(allNotes));
    dispatch(action.addNote(noteWithId));
};

export const deleteNote = (id) => (dispatch, getState) => {
    const {notes} = getState().notes;
    const updateNotes = notes.filter(it => it.id !== id);
    localStorage.setItem('notes', JSON.stringify(updateNotes));
    dispatch(action.updateNote(updateNotes));
};