import React from 'react';

import logo from './../images/logo.png';
import DropDown from './DropDown';

class NavSticky extends React.Component {
  
  render() {
    var imgWidth = 100;
    var imgHeight = 30;
    var altText = "Neo Geo Reviews";
    
    return(
  
      <nav className="navbar fixed-top">
        <div className="navbar-content">
          <div className="container">
            <div className="row">
              <div className="col-6 logo-xs-container">
                <img src={logo} width={imgWidth} height={imgHeight} alt={altText} />
              </div>
              <div className="col-6">
                <DropDown />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavSticky;
