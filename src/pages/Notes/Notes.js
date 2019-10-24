import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd/es';
import * as R from 'ramda';
import connect from './connect';
import { Note } from './components';
import text from '../../constants/text';
import './Notes.css';

const Notes = ({ addNote, notes }) => {
  const [visible, setVisible] = useState(false);
  const [currentNote, setCurrentNote] = useState({});

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleAdd = () => {
    addNote(currentNote);
    setVisible(false);
    setCurrentNote({});
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    const note = {
      ...currentNote,
      [name]: value
    };
    setCurrentNote(note);
  };

  return (
    <div className="wrapper">
      <h1>Notes</h1>
      <Button onClick={showModal} type="primary">Add note</Button>
      <Modal
        title="Add Note"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button type="back" onClick={handleCancel}>
            {text.modalCancel}
          </Button>,
          <Button type="primary" onClick={handleAdd}>
            {text.modalAdd}
          </Button>
        ]}
      >
        <Input
          placeholder="Title"
          name="title"
          onChange={onChange}
          value={currentNote.title}
        />
        <Input
          placeholder="Date in format MM.DD.YYYY"
          name="date"
          onChange={onChange}
          value={currentNote.date}
        />
        <Input.TextArea
          placeholder="Your note..."
          name="text"
          onChange={onChange}
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
          ), notes)
        }
      </div>

    </div>
  );
};

export default connect(Notes);
