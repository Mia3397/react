import { connect } from 'react-redux';
import { addNote, deleteNote, updateNoteById } from './helpers';

const mapStateToProps = (state) => ({
  notes: state.notesReducer.notes
});

const mapDispatchToProps = {
  addNote,
  deleteNote,
  updateNoteById
};

export default connect(mapStateToProps, mapDispatchToProps);
