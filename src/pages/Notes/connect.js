import {connect} from 'react-redux';
import {addNote, deleteNote} from './helpers'

const mapStateToProps = (state) => ({
    notes: state.notes.notes
});

const mapDispatchToProps = {
    addNote,
    deleteNote
};

export default connect(mapStateToProps, mapDispatchToProps);