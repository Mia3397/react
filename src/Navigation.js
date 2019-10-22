import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Sidebar } from './components';
import { Analytics, Music, Musicians, Notes } from './pages';
import connect from './connect';

const Navigation = ({ userName, logout }) => (
  <>
    <Header userName={userName} logout={logout} />
    <main>
      <Sidebar />
      <Route path="/home/musicians" exact component={Musicians} />
      <Route path="/home/analytics" exact component={Analytics} />
      <Route path="/home/notes" exact component={Notes} />
      <Route path="/home/music" exact component={Music} />
    </main>
  </>
);

Navigation.propTypes = {
  userName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(Navigation);
