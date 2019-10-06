import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Utils from '../../constants/utils';
import {Icon} from 'antd/es';
import connect from "./connect";
import './Sidebar.css';

class Sidebar extends Component {
    renderList = (isOpen) => (
        Utils.sidebarItems.map(it => (
            <NavLink to={it.path} key={it.title} activeClassName="active-link" className="link">
                <Icon type={it.iconType} />
                {isOpen && it.title}
            </NavLink>
        ))
    );

    render() {
        const { isOpen, toggleState } = this.props;
        return (
            <aside className={isOpen ? 'open' : 'close'}>
                <ul>
                    {this.renderList(isOpen)}
                </ul>
                <button onClick={toggleState}>
                    <Icon type={isOpen ? "double-left" : "double-right"}/>
                    {isOpen && 'Collapse Sidebar' }
                </button>
            </aside>
        );
    }
}

export default connect(Sidebar);