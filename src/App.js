import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import './constants/text';
import {Header, Sidebar} from './components';
import {Jobs, Analytics, Notes} from './pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './redux/index';

const rootStore = createStore(store, applyMiddleware(thunk));

const App = () => (
    <Provider store={rootStore}>
        <Router>
            <Header/>
            <main>
                <Sidebar/>
                <Route path="/jobs" component={Jobs}/>
                <Route path="/analytics" component={Analytics}/>
                <Route path="/notes" component={Notes}/>
            </main>
        </Router>
    </Provider>
);


export default App;