import React, { Component } from 'react';
import { Input, Spin, Button } from 'antd';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import connect from './connect';
import { Card } from '../../components';
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
    trackId: '',
    isOpenFavorites: false
  };

  componentDidMount() {
    const { location: { state } } = this.props;
    if (state) this.onSearch(state.term);
  }

  onPlay = (trackId, name) => () => {
    const { countPlaying } = this.props;
    this.setState({
      playing: true,
      trackId
    });
    countPlaying(name);
  };

  onStop = () => {
    this.setState({
      playing: false
    });
  };

  onSearch = (value) => {
    const { params } = this.state;
    this.setState({
      params: {
        ...params,
        term: value
      },
      isOpenFavorites: false
    }, this.getSongs);
  };

  getSongs = async () => {
    const { params } = this.state;
    const { getMusic } = this.props;
    this.setState({
      loading: true
    });
    await getMusic(params);
    this.setState({
      loading: false
    });
  };

  onChange = ({ target: { value } }) => {
    const { params } = this.state;
    this.setState({
      params: {
        ...params,
        term: value
      }
    });
  };

  showFavorites = () => {
    this.setState({
      isOpenFavorites: true
    });
  };

  render() {
    const { songs, addSongToFav, deleteFromFav } = this.props;
    const { loading, playing, trackId, params: { term }, isOpenFavorites } = this.state;
    const favSongs = JSON.parse(localStorage.getItem('favoriteSongs')) || {};

    return (
      <div className="wrapper">
        <Spin spinning={loading}>
          <h1>{isOpenFavorites ? text.favoritesHeadline : text.musicHeadline}</h1>
          <div className="filters">
            <Input.Search
              placeholder={text.placeholderForSearchMusic}
              enterButton={text.buttonSearch}
              onSearch={this.onSearch}
              value={term}
              onChange={this.onChange}
            />
            <Button
              type={isOpenFavorites ? 'default' : 'primary'}
              onClick={this.showFavorites}
            >
              {isOpenFavorites ? text.openFavorites : text.closeFavorites}
            </Button>
          </div>

          <div className="cards">
            {
              R.map((it) => (
                <Card
                  item={{ ...it, isFavorite: R.has(it.trackId, favSongs) }}
                  play={playing && it.trackId === trackId}
                  key={it.trackId}
                  onPlay={this.onPlay(it.trackId, it.artistName)}
                  onStop={this.onStop}
                  addSongToFav={addSongToFav}
                  deleteFromFav={deleteFromFav}
                />
              ),
              isOpenFavorites ? R.values(favSongs) : songs)
            }
          </div>
        </Spin>
      </div>
    );
  }
}

Music.propTypes = {
  countPlaying: PropTypes.func.isRequired,
  getMusic: PropTypes.func.isRequired,
  songs: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
};

export default connect(Music);
