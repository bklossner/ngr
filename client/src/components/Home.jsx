import React from 'react';

import DropDown from './DropDown';
import GameList from './GameList';

/**
 * @desc The landing page
 */
class Home extends React.Component {
  
  render() {
    return(
      <div>
        <span className="dropdown-home"><DropDown /></span>
        <GameList />
      </div>
    )
  }
}

export default Home;
