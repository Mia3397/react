import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './App.css';
import './constants/text';
import {Header, Sidebar} from './components';
import {Jobs, Analytics} from "./pages";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './redux/index'

const rootStore = createStore(store);

const App = () => (
    <Provider store={rootStore}>
        <Router>
            <Header/>
            <main>
                <Sidebar/>
                <Route path="/jobs" component={Jobs}/>
                <Route path="/analytics" component={Analytics}/>
            </main>
        </Router>
    </Provider>
);


export default App;