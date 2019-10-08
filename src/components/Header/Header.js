import React from 'react';
import {Icon} from 'antd';
import text from '../../constants/text';
import './Header.css';

const Header = ({userName}) => (
    <header>
        <h1 className="headline">
          {text.appName}
          <Icon type="apple" theme="filled"/>
        </h1>
        <p>
            {userName}
            {userName ? <Icon type="logout" /> : userName}
        </p>
    </header>
);

export default Header;