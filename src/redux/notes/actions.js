import {ADD_NOTE, DELETE_NOTE} from "./types";

export const addNote = (currentNote) => ({
    type: ADD_NOTE,
    payload: currentNote
});

export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    payload: id
});