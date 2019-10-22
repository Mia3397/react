import React, { Component } from 'react';
import { Button, Input, Modal } from 'antd/es';
import * as R from 'ramda';
import connect from './connect';
import { Note } from './components';
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
      });
    };

    handleCancel = () => {
      this.setState({
        visible: false,
      });
    };

    handleAdd = () => {
      const { currentNote } = this.state;
      const { addNote } = this.props;
      addNote(currentNote);
      this.setState({
        visible: false,
        currentNote: {}
      });
    };

    onChange = ({ target }) => {
      const { name, value } = target;
      const { currentNote } = this.state;
      this.setState({
        currentNote: {
          ...currentNote,
          [name]: value
        }
      });
    };

    render() {
      const { visible, currentNote } = this.state;
      const { notes } = this.props;
      return (
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
            <Input.TextArea
              placeholder="Your note..."
              name="text"
              onChange={this.onChange}
              value={currentNote.text}
            />
          </Modal>
          <div className="notes">
            {
                        R.map((note) => (
                          <Note
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            date={note.date}
                            text={note.text}
                          />
                        ),
                        notes)
                    }
          </div>

        </div>
      );
    }
}

export default connect(Notes);
