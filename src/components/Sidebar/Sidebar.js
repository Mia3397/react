import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from 'antd/es';
import * as R from 'ramda';
import utils from '../../constants/utils';
import connect from './connect';
import './Sidebar.css';

class Sidebar extends Component {
    renderList = (isOpen) => (
      R.map((it) => (
        <NavLink to={it.path} key={it.title} activeClassName="active-link" className="link">
          <Icon type={it.iconType} />
          {isOpen && it.title}
        </NavLink>
      ), utils.sidebarItems)
    );

    render() {
      const { isOpen, toggleState } = this.props;
      return (
        <aside className={`nav_bar ${isOpen ? 'open' : 'close'}`}>
          <ul>
            {this.renderList(isOpen)}
          </ul>
          <button type="submit" onClick={toggleState}>
            <Icon type={isOpen ? 'double-left' : 'double-right'} />
            {isOpen && 'Collapse Sidebar' }
          </button>
        </aside>
      );
    }
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleState: PropTypes.func.isRequired
};

export default connect(Sidebar);
