import { GET_MUSIC, ADD_SONG_TO_FAVORITE, UPDATE_FAVORITE_SONGS } from './types';
import F from '../../utils/func';

const favoriteSongs = localStorage.getItem('favoriteSongs');

const initialState = {
  songs: [],
  favoriteSongs: favoriteSongs || {}
};

const handleReducer = {
  [GET_MUSIC]: (state, { payload }) => ({
    ...state,
    songs: [...payload]
  }),
  [ADD_SONG_TO_FAVORITE]: (state, { payload }) => ({
    ...state,
    favoriteSongs: {
      ...state.favoriteSongs,
      payload
    }
  }),
  [UPDATE_FAVORITE_SONGS]: (state, { payload }) => ({
    ...state,
    favoriteSongs: payload
  })
};

export default F.createReducer(handleReducer, initialState);
