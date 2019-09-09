import React from 'react';
import menu from '../../constants/text';
import './Header.css';


const Header = () => {
    let {title, menuItems} = menu;
    return (<header className="header">
        <h1 className="headline">{title}</h1>
        {
            menuItems.map(item => (<li className="header-item" key={item}>{item}</li>))
        }
    </header>)
};

export default Header;