import {ADD_NOTE} from "./types";

export const addNote = (currentNote) => ({
    type: ADD_NOTE,
    payload: currentNote
});