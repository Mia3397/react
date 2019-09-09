import React from 'react';
import './Header.css';


const Header = ({title, menuItems}) => (
    <header className="header">
        <h1 className="headline">{title}</h1>
        {
            menuItems.map(item => (<li className="header-item" key={item}>{item}</li>))
        }
    </header>
);

export default Header;