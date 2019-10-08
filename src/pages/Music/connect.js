import {connect} from 'react-redux';
import {getMusic, countPlaying} from './helpers';

const mapStateToProps = (state) => ({
    songs: state.musicReducer.songs
});

const mapDispatchToProps = {
    getMusic,
    countPlaying
};

export default connect(mapStateToProps, mapDispatchToProps);