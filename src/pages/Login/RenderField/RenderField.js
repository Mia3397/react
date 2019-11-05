import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import './RenderField.scss';

const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => {
  const fieldError = error && (
    <>
      <Icon type="exclamation-circle" theme="filled" />
      {error}
    </>
  );
  return (
    <div>
      <input {...input} type={type} placeholder={label} />
      <span className="error_message">{touched && fieldError}</span>
    </div>
  );
};

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
};

export default RenderField;
