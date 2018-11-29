import React from 'react';

import NavSticky from './NavSticky';
import Header from './Header';
import SortByDropDown from './SortByDropDown';
import GameList from './GameList';

/**
 * @desc The landing page
 */
class Home extends React.Component {
  
  render() {
    return(
      <div>
        <NavSticky />
        <Header />
        <SortByDropDown />
        <GameList />
      </div>
    )
  }
}

export default Home;
