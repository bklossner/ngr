import React from 'react';
import './css/App.css';

import NavSticky from './components/NavSticky';
import Header from './components/Header';
import SortByDropDown from './components/SortByDropDown';
import GameList from './components/GameList';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavSticky />
        <Header />
        <SortByDropDown />
        <GameList />
      </div>
    );
  }
}

export default App;
