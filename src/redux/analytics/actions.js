import { UPDATE_SEARCH_COUNTER, UPDATE_PLAY_COUNTER } from './types';

export const updateSearchCounter = (artist) => ({
  type: UPDATE_SEARCH_COUNTER,
  payload: artist
});

export const updatePlayCounter = (artist) => ({
  type: UPDATE_PLAY_COUNTER,
  payload: artist
});
