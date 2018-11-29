import React from 'react';
import SnkLogo from './SnkLogo';
import NgrLogo from './NgrLogo';

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
            <NgrLogo/>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Header;
