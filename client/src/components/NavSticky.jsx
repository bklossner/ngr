import React from 'react';

import logo from './../images/logo.png';

class NavSticky extends React.Component {
  
  render() {
    var imgWidth = 100;
    var imgHeight = 30;
    var altText = "Neo Geo Reviews";
    
    return(
  
      <nav className="navbar fixed-top">
        <div className="navbar-content">
          <img src={logo} width={imgWidth} height={imgHeight} alt={altText} />
        </div>
      </nav>
    )
  }
}

export default NavSticky;
