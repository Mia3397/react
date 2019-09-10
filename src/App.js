import React, {Fragment} from 'react';
import './App.css';
import './constants/text';
import {Header, Sidebar} from './components';

const App = () => (
    <Fragment>
        <Header/>
        <Sidebar/>
    </Fragment>
);


export default App;