import React from "react";
import ReactPlayer from "react-player";
import {Button, Icon} from "antd";
import F from "../../utils/func";
import './Player.css';

class Player extends React.Component {
    state = {
        progress: 0,
        playedSeconds: 0,
    };

    changeProgress = ({played, playedSeconds}) => {
        this.setState({
            progress: played,
            playedSeconds
        })
    };

    render() {
        const {url, track, play, onPlay, onStop} = this.props;
        const {playedSeconds, progress} = this.state;

        return (
            <div className="player_wrapper">
                <ReactPlayer
                    url={url}
                    playing={play}
                    fileConfig={{forceAudio: true}}
                    onProgress={this.changeProgress}
                />
                <div className="player">
                    <Button type="primary" onClick={play ? onStop : onPlay} id={track}>
                        <Icon type={ play ? "pause" : "caret-right"} />
                    </Button>
                    <span>{`0:${F.createCorrectDurationPart(Math.round(playedSeconds))} / 0:30`}</span>
                    <div className="progress_bar">
                        <span style={{width: `${progress * 100}%`}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;