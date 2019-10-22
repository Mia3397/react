import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as R from 'ramda';
import { Login } from './pages';
import Navigation from './Navigation';
import 'antd/dist/antd.css';
import 'react-vis/dist/style.css';
import './App.css';

const App = () => {
  const userName = R.pipe(
    (it) => localStorage.getItem(it),
    JSON.parse,
    R.path(['name'])
  )('user');

  return (
    <Router>
      <Redirect exact from="/" to="/login" />
      {userName && <Redirect exact from="/login" to="/home" />}
      <Switch>
        <Route path="/home" component={Navigation} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
