import React, {Component} from 'react';
import {Button, Input, Modal} from 'antd/es';
import connect from './connect';
import text from '../../constants/text';
import './Notes.css';

class Notes extends Component {
    state = {
        visible: false,
        currentNote: {}
    };

    showModal = () => {
        this.setState({
            visible: true
        })
    };

    handleCancel = () => {
        this.setState({
            visible: false
        })
    };

    handleAdd = () => {
        const { currentNote } = this.state;
        this.props.addNote(currentNote);
        this.setState({
            visible: false,
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
        const {visible, currentNote} = this.state;
        const {notes} = this.props;
        const {TextArea} = Input;
        return(
            <div className="wrapper">
                <h1>Notes</h1>
                <Button onClick={this.showModal} type="primary">
                    Add note
                </Button>
                <Modal
                    title="Add Note"
                    visible={visible}
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
                        <div className="note" key={note.title}>
                            <div className="title">
                                <h2>{note.title}</h2>
                                <span>{note.date}</span>
                            </div>
                            <p>{note.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect(Notes);