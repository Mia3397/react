import React, { useState } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { EditContainer } from '../index';
import connect from '../../connect';
import utils from '../../../../constants/utils';
import buttonText from '../../../../constants/text';
import './Note.scss';

const Note = ({ id, updateNoteById, deleteNote, title, date, text }) => {
  const [filledType, setFilledType] = useState(null);
  const [filledValue, setFilledValue] = useState('');

  const onEdit = (type, value) => () => {
    setFilledType(type);
    setFilledValue(value);
  };

  const onChange = ({ target: { value } }) => {
    setFilledValue(value);
  };

  const onUpdate = () => {
    updateNoteById(id, filledValue, filledType);
    setFilledValue('');
    setFilledType(null);
  };

  const onDeleteNote = () => {
    deleteNote(id);
  };

  return (
    <div className="note">
      <header>
        <div className="note-info">
          <EditContainer
            type={filledType}
            containerType={utils.types.title}
            value={filledValue}
            onChange={onChange}
            onUpdate={onUpdate}
            text={title}
            onEdit={onEdit}
          />
          <EditContainer
            type={filledType}
            containerType={utils.types.date}
            value={filledValue}
            onChange={onChange}
            onUpdate={onUpdate}
            text={date}
            onEdit={onEdit}
          />
        </div>
        <Button type="primary" onClick={onDeleteNote}>
          {buttonText.buttonDelete}
        </Button>
      </header>

      <EditContainer
        type={filledType}
        containerType={utils.types.text}
        value={filledValue}
        onChange={onChange}
        onUpdate={onUpdate}
        text={text}
        onEdit={onEdit}
      />
    </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  updateNoteById: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default connect(Note);
