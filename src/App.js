import React from 'react';
import './App.css';
import Header from './components/Header/Header'


class App extends React.Component {

  render() {
    const menu = {
      title: 'My header',
      menuItems: ['Home', 'Posts', 'Contact']
    };
    return (Header(menu));
  }
}

export default App;