import React from 'react';
import SNKLogo from './snklogo';
import NGRLogo from './ngrlogo';

class Header extends React.Component {
  
  /**
   * @description Screen reader text
   * @type {string}
   */
  srText = "Neo Geo Reviews";
  
  /**
   * @function render
   * @description Output the header element, including {@link SNKLogo} and {@link NGRLogo}
   * @returns {*}
   */
  render() {
    return(
      <div className="container">
        <div className="row d-sm-none">
          <div className="col-xs-auto">
            <SNKLogo/>
          </div>
        </div>
        <div className="row d-none d-sm-flex justify-content-center">
          <div className="col-sm-auto">
            <SNKLogo/>
          </div>
        </div>
        <div className="row justify-content-sm-center">
          <div className="col-sm-auto">
            <h1 className="sr-only">{this.srText}</h1>
            <NGRLogo/>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Header;
