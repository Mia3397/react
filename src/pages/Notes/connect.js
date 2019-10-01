import {connect} from 'react-redux';
import {addNote, deleteNote, saveNote} from './helpers'

const mapStateToProps = (state) => ({
    notes: state.notesReducer.notes
});

const mapDispatchToProps = {
    addNote,
    deleteNote,
    saveNote
};

export default connect(mapStateToProps, mapDispatchToProps);