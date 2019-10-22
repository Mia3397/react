import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import text from '../../constants/text';
import './Header.css';

const Header = ({ userName, logout }) => (
  <header>
    <h1 className="headline">
      {text.appName}
      <Icon type="apple" theme="filled" />
    </h1>
    <p>
      {userName}
      <Icon type="logout" onClick={logout} />
    </p>
  </header>
);

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;
