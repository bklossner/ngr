import React from 'react';
import './css/App.css';


import Header from './components/Header';
import SortByDropDown from './components/SortByDropDown';
import GameList from './components/GameList';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <SortByDropDown />
        <GameList />
      </div>
    );
  }
}

export default App;
