import React, {Component} from 'react';
import {Button, Input, Modal} from 'antd/es';
import connect from './connect';
import text from '../../constants/text';
import './Notes.css';

class Notes extends Component {
    state = {
        visibleAddNoteModal: false,
        visibleChangeNoteModal: false,
        changeNoteId: '',
        currentNote: {}
    };

    showAddNoteModal = () => {
        this.setState({
            visibleAddNoteModal: true
        })
    };

    changeNote = (id) => () =>{
        this.setState({
            visibleChangeNoteModal: true,
            changeNoteId: id
        });
    };

    handleCancel = () => {
        this.setState({
            visibleAddNoteModal: false,
            visibleChangeNoteModal: false
        })
    };

    handleAdd = () => {
        const { currentNote } = this.state;
        this.props.addNote(currentNote);
        this.setState({
            visibleAddNoteModal: false,
            currentNote: {}
        });
    };

    deleteNote = (id) => () => this.props.deleteNote(id);

    saveNote = (id, note) => () => {
        this.props.saveNote(id, note);
        this.setState({
            visibleChangeNoteModal: false,
            currentNote: {}
        });

    };

    onChange = ({target}) => {
        const {name, value} = target;
        const { currentNote } = this.state;
        this.setState({
            currentNote: {
                ...currentNote,
                [name]: value
            }
        })
    };

    render() {
        const {visibleAddNoteModal, visibleChangeNoteModal, currentNote, changeNoteId} = this.state;
        const {notes} = this.props;
        const {TextArea} = Input;
        return(
            <div className="wrapper">
                <h1>Notes</h1>
                <Button onClick={this.showAddNoteModal} type="primary">
                    Add note
                </Button>
                <Modal
                    title="Add Note"
                    visible={visibleAddNoteModal}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button type="back" onClick={this.handleCancel}>
                            {text.modalCancel}
                        </Button>,
                        <Button type="primary" onClick={this.handleAdd}>
                            {text.modalAdd}
                        </Button>
                    ]}
                >
                    <Input
                        placeholder="Title"
                        name="title"
                        onChange={this.onChange}
                        value={currentNote.title}
                    />
                    <Input
                        placeholder="Date in format MM.DD.YYYY"
                        name="date"
                        onChange={this.onChange}
                        value={currentNote.date}
                    />
                    <TextArea
                        placeholder="Your note..."
                        name="text"
                        onChange={this.onChange}
                        value={currentNote.text}
                    />
                </Modal>
                <div className="notes">
                    {notes.map(note => (
                        <div className="note" key={note.title} id={note.id}>
                            <header>
                                <div className="title">
                                    <h2>{note.title}</h2>
                                    <span>{note.date}</span>
                                </div>
                                <div className="note-updater">
                                    <Button type="primary" onClick={this.deleteNote(note.id)}>
                                        {text.buttonDelete}
                                    </Button>
                                    <Button type="primary" onClick={this.changeNote(note.id)}>
                                        {text.buttonChange}
                                    </Button>
                                </div>
                            </header>
                            <div>{note.text}</div>
                        </div>
                    ))}
                </div>
                <Modal
                    title="Change Note"
                    visible={visibleChangeNoteModal}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button type="back" onClick={this.handleCancel}>
                            {text.modalCancel}
                        </Button>,
                        <Button type="primary" onClick={this.saveNote(changeNoteId, currentNote)}>
                            {text.modalSave}
                        </Button>
                    ]}
                >
                    <Input
                        placeholder="Title"
                        name="title"
                        onChange={this.onChange}
                        value={currentNote.title}
                    />
                    <Input
                        placeholder="Date in format MM.DD.YYYY"
                        name="date"
                        onChange={this.onChange}
                        value={currentNote.date}
                    />
                    <TextArea
                        placeholder="Your note..."
                        name="text"
                        onChange={this.onChange}
                        value={currentNote.text}
                    />
                </Modal>
            </div>
        )
    }
}

export default connect(Notes);