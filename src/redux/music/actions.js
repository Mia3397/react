import { GET_MUSIC, ADD_SONG_TO_FAVORITE, UPDATE_FAVORITE_SONGS } from './types';

export const getMusic = (songs) => ({
  type: GET_MUSIC,
  payload: songs
});

export const addSongToFavorite = (song) => ({
  type: ADD_SONG_TO_FAVORITE,
  payload: song
});

export const updateFavoriteSongs = (songs) => ({
  type: UPDATE_FAVORITE_SONGS,
  payload: songs
});
