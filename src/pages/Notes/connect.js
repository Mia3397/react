import {connect} from 'react-redux';
import {addNote, deleteNote} from './helpers'

const mapStateToProps = (state) => ({
    notes: state.notesReducer.notes
});

const mapDispatchToProps = {
    addNote,
    deleteNote
};

export default connect(mapStateToProps, mapDispatchToProps);