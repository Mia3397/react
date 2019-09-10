import React, {Component} from 'react';
import Utils from '../../constants/utils';
import './Sidebar.css';

class Sidebar extends Component {
    state = {
        isOpen: false,
    };

    toggleStateSidebar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    renderList = () => (
        Utils.sidebarItems.map(it => (
            <li key={it.title}>
                <a>
                    {it.title}
                </a>
            </li>
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