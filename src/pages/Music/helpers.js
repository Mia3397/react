import * as R from 'ramda';
import * as action from '../../redux/music/actions';
import * as analyticsActions from '../../redux/analytics/actions';
import api from '../../methods/api';

export const getMusic = (params) => async (dispatch, getState) => {
    const {data: {results}} = await api.getMusic(params);
    if (results.length) {
        const { artistName } = R.pipe(
            R.filter(track => R.indexOf('&', track.artistName) === -1),
            R.head,
        )(results);
        const artist = getState().analyticsReducer.artists[artistName] || {};
        dispatch(analyticsActions.updateSearchCounter({
            ...artist,
            artistName,
            searchCounter: artist.searchCounter ? artist.searchCounter + 1 : 1
        }))
    }
    dispatch(action.getMusic(results));
};

export const countPlaying = (name) => (dispatch, getState) => {
    const artistName = R.indexOf('&', name) === -1 ? name : R.split(' & ', name)[0];
    const artist = getState().analyticsReducer.artists[artistName] || {};
    dispatch(analyticsActions.updatePlayCounter({
        ...artist,
        artistName,
        playCounter: artist.playCounter ? artist.playCounter + 1 : 1
    }))
};

export const addSongToFav = (song) => (dispatch) => {
    const favSongs = R.pipe(
        key => localStorage.getItem(key),
        R.defaultTo('{}'),
        JSON.parse
    )('favoriteSongs');
    if(!R.has(song.trackId, favSongs)) favSongs[song.trackId] = song;
    localStorage.setItem('favoriteSongs', JSON.stringify(favSongs));
    dispatch(action.addSongToFavorite(song));
};

export const deleteFromFav = (id) => (dispatch) => {
    const favSongs = R.pipe(
        key => localStorage.getItem(key),
        R.defaultTo('{}'),
        JSON.parse
    )('favoriteSongs');
    delete favSongs[id];
    localStorage.setItem('favoriteSongs', JSON.stringify(favSongs));
    dispatch(action.updateFavoriteSongs(favSongs));
};