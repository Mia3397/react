import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
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
            <NavLink to={it.path} key={it.title} activeClassName="active-link">
                {it.title}
            </NavLink>
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