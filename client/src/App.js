import React from 'react';
import './css/App.css';
import { Router } from '@reach/router';
import $ from 'jquery';

import NavSticky from './components/NavSticky';
import Header from './components/Header';
import Home from './components/Home';
import GameInfo from './components/GameInfo';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentDidMount(){
    // Add event listener for scrolling the viewport (necessary for the sticky navbar logic)
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    // Remove the viewport-scrolling event listener
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(){
    
    /**
     * The Y-value of the .dropdown-container element
     * @type {number|jQuery}
     */
    let dropdownLocation = $('.dropdown-home').offset().top;
    
    /**
     * The current value of the Y axis
     * @type {number}
     */
    let yScrollPos = window.pageYOffset;
    
    // If the current value of the Y axis is below the dropdownLoction, show the sticky navbar
    // If it's above the dropdownLocation, hide the sticky navbar
    yScrollPos > dropdownLocation ? $('.navbar').slideDown() : $('.navbar').fadeOut();
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
