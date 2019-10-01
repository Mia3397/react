import React, {Component} from "react";
import {Input} from 'antd';
import connect from './connect';
import {Card} from '../../components';
import {Spin} from 'antd';
import text from '../../constants/text';
import './Music.css';

class Music extends Component {
    state = {
        params: {
            term: null,
            entity: 'song'
        },
        loading: false,
        playing: false,
        trackId: ''
    };

    onPlay = (id) => () => {
        this.setState({
            playing: true,
            trackId: id
        })
    };

    onStop = () => {
        this.setState({
            playing: false
        })
    };

    onSearch = (value) => {
        this.setState({
            params: {
                ...this.state.params,
                term: value
            }
        }, this.getSongs)
    };

    getSongs = async () => {
        this.setState({
            loading: true
        });
        await this.props.getMusic(this.state.params);
        this.setState({
            loading: false
        });
    };

    render() {
        const {songs} = this.props;
        const {loading, playing, trackId} = this.state;

        return (
            <div className="wrapper">
                <Spin spinning={loading}>
                    <h1>Music</h1>
                    <Input.Search
                        placeholder={text.placeholderForSearchMusic}
                        enterButton={text.buttonSearch}
                        onSearch={this.onSearch}
                    />
                    <div className="cards">
                        {songs.map(it => <Card
                            item={it}
                            play={playing && it.trackId === trackId}
                            key={it.trackId}
                            onPlay={this.onPlay(it.trackId)}
                            onStop={this.onStop}
                        />)}
                    </div>
                </Spin>
            </div>
        )
    }
}

export default connect(Music);