import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Avatar } from '../index';
import Player from '../Player/Player';
import F from '../../utils/func';
import './Card.css';


const Card = ({ item, addSongToFav, deleteFromFav, play, onPlay, onStop }) => {
  const {
    artworkUrl100,
    artistName,
    trackName,
    collectionName,
    country,
    releaseDate,
    trackTimeMillis,
    previewUrl,
    trackId,
    isFavorite
  } = item;

  const [isFav, setIsFav] = useState(isFavorite);

  const addToFavorite = (song) => () => {
    setIsFav(true);
    addSongToFav(song);
  };

  const deleteFromFavorite = (id) => () => {
    setIsFav(false);
    deleteFromFav(id);
  };

  return (
    <div className="card">
      <div className="info">
        <Avatar url={artworkUrl100} />
        <div className="text">
          <h2>{`${F.parseName(artistName)} - ${F.parseName(trackName)}`}</h2>
          <p>{`Album: ${F.parseName(collectionName)}`}</p>
          <p>{`Country: ${country}`}</p>
          <p>{`Date: ${F.parseDateRelease(releaseDate)}`}</p>
          <p>{`Duration: ${F.parseDuration(trackTimeMillis)}`}</p>
        </div>
        <Icon
          type="heart"
          onClick={isFav ? deleteFromFavorite(trackId) : addToFavorite(item)}
          theme={isFav ? 'filled' : ''}
        />
      </div>
      <Player
        url={previewUrl}
        track={trackId}
        play={play}
        onPlay={onPlay}
        onStop={onStop}
      />
    </div>
  );
};


Card.propTypes = {
  item: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trackTimeMillis: PropTypes.number.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }).isRequired,
  play: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
};

export default Card;
