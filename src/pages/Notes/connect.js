import {connect} from 'react-redux';
import {addNote} from './helpers';

const mapStateToProps = (state) => ({
    notes: state.notes.notes
});

const mapDispatchToProps = {
    addNote
};

export default connect(mapStateToProps, mapDispatchToProps);