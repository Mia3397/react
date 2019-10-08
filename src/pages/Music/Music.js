import React, {Component} from 'react';
import {Input, Spin} from 'antd';
import * as R from 'ramda';
import connect from './connect';
import {Card} from '../../components';
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

    componentDidMount() {
        const {state} = this.props.location;
        state && this.onSearch(state.term)
    }

    onPlay = (trackId, name) => () => {
        this.setState({
            playing: true,
            trackId
        });
        this.props.countPlaying(name);
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
            },
        }, this.getSongs);
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

    onChange = ({target: {value}}) => {
        this.setState({
            params: {
                ...this.state.params,
                term: value
            }
        })
    };

    render() {
        const {songs} = this.props;
        const {loading, playing, trackId, params:{term}} = this.state;

        return (
            <div className="wrapper">
                <Spin spinning={loading}>
                    <h1>{text.musicHeadline}</h1>
                    <Input.Search
                        placeholder={text.placeholderForSearchMusic}
                        enterButton={text.buttonSearch}
                        onSearch={this.onSearch}
                        value={term}
                        onChange={this.onChange}
                    />
                    <div className="cards">
                        {
                            R.map(it =>
                                <Card
                                    item={it}
                                    play={playing && it.trackId === trackId}
                                    key={it.trackId}
                                    onPlay={this.onPlay(it.trackId, it.artistName)}
                                    onStop={this.onStop}
                                />,
                            songs)
                        }
                    </div>
                </Spin>
            </div>
        )
    }
}

export default connect(Music);