import React from 'react';
import {Icon} from 'antd';
import PropTypes from 'prop-types';
import text from '../../constants/text';
import './Header.css';

const Header = ({userName}) => {

    return (
        <header>
            <h1 className="headline">
                {text.appName}
                <Icon type="apple" theme="filled"/>
            </h1>
            <p>
                {userName}
                {userName ? <Icon type="logout"/> : userName}
            </p>
        </header>
    )
};

Header.propTypes = {
    userName: PropTypes.string
};

export default Header;