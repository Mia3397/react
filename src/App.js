import React from 'react';
import './App.css';
import './constants/text';
import {Header, Sidebar} from './components';
import {Repositories, Chart, Notes, Price} from "./pages";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => (
    <Router>
        <Header/>
        <main>
            <Sidebar/>
            <Switch>
                <Route path="/" exact component={Repositories}/>
                <Route path="/repositories" component={Repositories}/>
                <Route path="/chart" component={Chart}/>
                <Route path="/price" component={Price}/>
                <Route path="/notes" component={Notes}/>
            </Switch>
        </main>
    </Router>
);


export default App;