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
        <div className="row justify-content-sm-center">
          <div className="col-sm-auto">
            <SnkLogo/>
          </div>
        </div>
        <div className="row justify-content-sm-center">
          <div className="col-sm-auto">
            <h1 className="sr-only">{this.srText}</h1>
            <Link to="/"><NgrLogo /></Link>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Header;
