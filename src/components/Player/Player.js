import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import F from '../../utils/func';
import './Player.css';

const Player = ({ url, track, play, onPlay, onStop }) => {
  const [progress, setProgress] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);


  const changeProgress = ({ played, playedSeconds: seconds }) => {
    setProgress(played);
    setPlayedSeconds(seconds);
  };

  return (
    <div className="player_wrapper">
      <ReactPlayer
        url={url}
        playing={play}
        fileConfig={{ forceAudio: true }}
        onProgress={changeProgress}
      />
      <div className="player">
        <Button type="primary" onClick={play ? onStop : onPlay} id={track}>
          <Icon type={play ? 'pause' : 'caret-right'} />
        </Button>
        <span>{`0:${F.createCorrectDurationPart(Math.round(playedSeconds))} / 0:30`}</span>
        <div className="progress_bar">
          <span style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  url: PropTypes.string.isRequired,
  track: PropTypes.number.isRequired,
  play: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
};

export default Player;
