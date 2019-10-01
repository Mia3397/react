import {GET_MUSIC} from "./types";

export const getMusic = (songs) => ({
    type: GET_MUSIC,
    payload: songs
});