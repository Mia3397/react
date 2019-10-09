import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from '../index';
import Player from '../Player/Player';
import F from '../../utils/func';
import './Card.css';

const Card = ({item, play, onPlay, onStop}) =>  {
    const {
      artworkUrl100,
      artistName,
      trackName,
      collectionName,
      country,
      releaseDate,
      trackTimeMillis,
      previewUrl,
      trackId
    } = item;

    return  (
        <div className="card">
            <div className="info">
                <Avatar url={artworkUrl100}/>
                <div className="text">
                    <h2>{`${F.parseName(artistName)} - ${F.parseName(trackName)}`}</h2>
                    <p>{`Album: ${F.parseName(collectionName)}`}</p>
                    <p>{`Country: ${country}`}</p>
                    <p>{`Date: ${F.parseDateRelease(releaseDate)}`}</p>
                    <p>{`Duration: ${F.parseDuration(trackTimeMillis)}`}</p>
                </div>
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
        trackId: PropTypes.number.isRequired
    }),
    play: PropTypes.bool.isRequired,
    onPlay: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired
};

export default Card;