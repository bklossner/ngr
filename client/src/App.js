import React from 'react';
import './css/App.css';
import $ from 'jquery';
import { Router } from '@reach/router';

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
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(){
    
    let dropdownLocation = $('.dropdown-container').offset().top;
  
    let yScrollPos = window.pageYOffset;
  
    if(yScrollPos > dropdownLocation) {
      console.log("Show sticky");
      $('.navbar').slideDown();
    }
    else {
      console.log("Hide sticky");
      $('.navbar').fadeOut();
    }
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
