import React from 'react';

import SortByDropDown from './SortByDropDown';
import GameList from './GameList';

/**
 * @desc The landing page
 */
class Home extends React.Component {
  
  render() {
    return(
      <div>
        <SortByDropDown />
        <GameList />
      </div>
    )
  }
}

export default Home;