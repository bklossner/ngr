import React from 'react';
import SNKLogo from './snklogo';
import NGRLogo from './ngrlogo';

class Header extends React.Component {
  
  /**
   * @const srText
   * @description Screen reader text
   * @type {string}
   */
  srText = "Neo Geo Reviews";
  
  render() {
    return(
      <div className="container">
        <h1 className="sr-only">{this.srText}</h1>
        <div className="row justify-content-sm-center">
          <div className="col-sm-auto">
            <SNKLogo/>
          </div>
        </div>
        <div className="row justify-content-sm-center">
          <div className="col-sm-auto">
            <NGRLogo/>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Header;
