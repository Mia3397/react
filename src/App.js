import React from 'react';
import './App.css';
import './constants/text';
import {Header, Sidebar} from './components';
import {Repositories, Chart, Notes, Price} from "./pages";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => (
    <Router>
        <Header/>
        <main>
            <Sidebar/>
            <Route path="/" exact component={Repositories}/>
            <Route path="/repositories" component={Repositories}/>
            <Route path="/chart" component={Chart}/>
            <Route path="/price" component={Price}/>
            <Route path="/notes" component={Notes}/>
        </main>
    </Router>
);


export default App;