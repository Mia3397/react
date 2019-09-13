import React from 'react';
import './App.css';
import './constants/text';
import {Header, Sidebar} from './components';
import {Jobs, Analytics} from "./pages";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => (
    <Router>
        <Header/>
        <main>
            <Sidebar/>
            <Route path="/jobs" component={Jobs}/>
            <Route path="/analytics" component={Analytics}/>
        </main>
    </Router>
);


export default App;