import React, { Component } from 'react';
import text from '../../constants/text';
import './Sidebar.css';

class Sidebar extends Component {
    state = {
        isOpen: false,
    };

    changeIsOpen = () =>
        this.setState({
            isOpen: !this.state.isOpen
        });

    render() {
        let isOpen = this.state.isOpen;
        return (
            <aside className={isOpen ? 'open' : 'close'}>
                <ul>
                {
                    isOpen ? (text.sidebarItems.map(title => (
                        <li key={title}>
                            <a>
                                {title}
                            </a>
                        </li>
                        )
                    )) : ''
                }
                </ul>
                <input type='button' value={ isOpen ? '<< Collapse Sidebar' : '>>'}  onClick={this.changeIsOpen}/>
            </aside>
        );
    }
}

export default Sidebar;