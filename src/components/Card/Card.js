import React from 'react';
import Avatar from "../Avatar/Avatar";
import Player from "../Player/Player";
import F from '../../utils/func';
import './Card.css';

const Card = ({item, play, onPlay, onStop}) =>  {
    const {artworkUrl100, artistName, trackName, collectionName, country, releaseDate, trackTimeMillis, previewUrl, trackId} = item;

    return  (
        <div className='card'>
            <div className='info'>
                <Avatar url={artworkUrl100}/>
                <div className="text">
                    <h2>{`${artistName} - ${F.parseTrackName(trackName)}`}</h2>
                    <p>{`Album: ${collectionName}`}</p>
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


export default Card;