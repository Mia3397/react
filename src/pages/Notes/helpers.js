import * as action from '../../redux/notes/actions';

export const addNote = (note) => (dispatch, getState) => {
    // console.log(getState())
    dispatch(action.addNote(note))
};