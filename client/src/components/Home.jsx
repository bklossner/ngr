import React from 'react';

import DropDown from './DropDown';
import GameList from './GameList';
import $ from 'jquery';

let sorters = [{ property: 'title', direction: 'ASC' }];

/**
 * @desc The landing page
 */
class Home extends React.Component {
  
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
    return(
      <div>
        <span className="dropdown-home"><DropDown /></span>
        <GameList sorters={sorters} />
      </div>
    )
  }
}

export default Home;
