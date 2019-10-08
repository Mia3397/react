import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import store from './redux/index';
import {Musicians, Analytics, Notes, Music} from './pages';
import {Header, Sidebar} from './components';
import './constants/text';
import './App.css';

const rootStore = createStore(store, applyMiddleware(thunk));

const App = () => (

    <Provider store={rootStore}>
        <Router>
            <Header/>
            <main>
                <Sidebar/>
                <Route path="/musicians" exact component={Musicians}/>
                <Route path="/analytics" exact component={Analytics}/>
                <Route path="/notes" exact component={Notes}/>
                <Route path="/music" exact component={Music}/>
            </main>
        </Router>
    </Provider>
);


export default App;