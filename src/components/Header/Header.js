import React from 'react';
import text from '../../constants/text';
import './Header.css';

const Header = () => (
    <header className="header">
        <h1 className="headline">{text.headerItems.title}</h1>
        {
            text.headerItems.menuItems.map(item => (
                <li className="header-item" key={item}>{item}</li>
            ))
        }
    </header>
);

export default Header;