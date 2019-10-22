import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Login} from './pages';
import Navigation from './Navigation';
import './App.css';

const App = () => {
    const userName = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).name : null;
    console.log(userName);
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/login"/>
                {userName && <Redirect exact from="/login" to="/home"/>}
                <Route path="/home" component={Navigation}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    )
};


export default App;