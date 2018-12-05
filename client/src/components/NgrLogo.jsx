/**
 * @class NgrLogo
 * @description Displays the "Neo Geo Reviews" logo
 * @author Bob Klossner
 */

import React from 'react';
import ngrLogo from './../images/logo.png';
import ngrLogoXS from './../images/logo_255x75.png';

class NGRLogo extends React.Component {
  
  /**
   * @description Text for the alt and title attributes
   * @type {string}
   */
  description = "Neo Geo Reviews";
  
  /**
   * @function render
   * @description Returns the <img> logo
   * @returns {*}
   */
  render() {
    return (
      <div className="col-xs-auto">
        <h1 className="sr-only">{this.srText}</h1>
        <img className="ngrLogo d-none d-sm-block" src={ngrLogo} alt={this.description} title={this.description} />
        <img className="ngrLogo-xs d-block d-sm-none" src={ngrLogoXS} alt={this.description} title={this.description} />
      </div>
    );
  }
}

export default NGRLogo;
