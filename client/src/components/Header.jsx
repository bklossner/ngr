import React from 'react';
import SnkLogo from './SnkLogo';
import NgrLogo from './NgrLogo';
import { Link } from '@reach/router';

class Header extends React.Component {
  
  /**
   * @description Screen reader text
   * @type {string}
   */
  srText = "Neo Geo Reviews";
  
  /**
   * @function render
   * @description Output the header element, including {@link SnkLogo} and {@link NgrLogo}
   * @returns {*}
   */
  render() {
    return(
      <div className="container">
        <div className="row justify-content-center">
          <SnkLogo/>
        </div>
        <div className="row justify-content-center">
          <Link to="/"><NgrLogo /></Link>
        </div>
      </div>
    )
  }
  
}

export default Header;
