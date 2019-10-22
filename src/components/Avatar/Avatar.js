import React from 'react';
import PropTypes from 'prop-types';
import text from '../../constants/text';
import './Avatar.css';

const Avatar = ({ url }) => (
  <img src={url} alt={text.imgAlt} />
);

Avatar.propTypes = {
  url: PropTypes.string.isRequired
};

export default Avatar;
