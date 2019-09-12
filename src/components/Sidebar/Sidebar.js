import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Utils from '../../constants/utils';
import './Sidebar.css';

class Sidebar extends Component {
    state = {
        isOpen: true,
    };

    toggleStateSidebar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    renderList = () => (
        Utils.sidebarItems.map(it => (
            <Link to={it.path}>
                <li key={it.title}>
                    {it.title}
                </li>
            </Link>
        ))
    );

    render() {
        const {isOpen} = this.state;
        return (
            <aside className={isOpen ? 'open' : 'close'}>
                <ul>
                    {isOpen && this.renderList()}
                </ul>
                <button onClick={this.toggleStateSidebar}>
                    {isOpen ? '<< Collapse Sidebar' : '>>'}
                </button>
            </aside>
        );
    }
}

export default Sidebar;