import { connect } from 'react-redux';
import { getMusic, countPlaying, addSongToFav, deleteFromFav } from './helpers';

const mapStateToProps = (state) => ({
  songs: state.musicReducer.songs
});

const mapDispatchToProps = {
  getMusic,
  countPlaying,
  addSongToFav,
  deleteFromFav
};

export default connect(mapStateToProps, mapDispatchToProps);
