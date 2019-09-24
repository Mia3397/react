import {ADD_NOTE, UPDATE_NOTE} from "./types";

export const addNote = (currentNote) => ({
    type: ADD_NOTE,
    payload: currentNote
});

export const updateNote = (updateNotes) => ({
    type: UPDATE_NOTE,
    payload: updateNotes
});