import * as action from '../../redux/notes/actions';

export const addNote = (note) => (dispatch) => {
    dispatch(action.addNote(note))
};

export const deleteNote = (id) => (dispatch) => {
    dispatch(action.deleteNote(id))
};