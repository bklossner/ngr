import React from 'react';
import './App.css';
import Header from './components/header';
import Dropdown from './components/dropdown';
import GameList from './components/gamelist';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Dropdown />
          <GameList />
        </div>
      </div>
    );
  }
}

export default App;
