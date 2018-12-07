import React from 'react';
import './css/App.css';
import { Router } from '@reach/router';

import NavSticky from './components/NavSticky';
import Header from './components/Header';
import Home from './components/Home';
import GameInfo from './components/GameInfo';

class App extends React.Component {
  
  componentDidMount(){
    // Add event listener for scrolling the viewport (necessary for the sticky navbar logic)
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    // Remove the viewport-scrolling event listener
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  render() {
    return (
      <div className="App">
        
        {/* Sticky navbar */}
        <NavSticky />
        
        {/* Top Hero (banner) images */}
        <Header />
        
        {/* Specify the different routes (pages) */}
        <Router>
          <Home path="/" />
          <GameInfo path="gameinfo/:id" />
        </Router>
        
      </div>
    );
  }
}

export default App;
