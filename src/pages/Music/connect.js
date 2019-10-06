import {connect} from 'react-redux';
import {getMusic} from './helpers';

const mapStateToProps = (state) => ({
    songs: state.musicReducer.songs
});

const mapDispatchToProps = {
    getMusic
};

export default connect(mapStateToProps, mapDispatchToProps);