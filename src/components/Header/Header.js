import React from 'react';
import {Icon} from 'antd';
import text from '../../constants/text';
import './Header.css';

const Header = () => (
    <header>
        <h1 className="headline">
          {text.appName}
          <Icon type="apple" theme="filled"/>
        </h1>
    </header>
);

export default Header;