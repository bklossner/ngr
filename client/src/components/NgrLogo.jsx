/**
 * @class NgrLogo
 * @description Displays the "Neo Geo Reviews" logo
 * @author Bob Klossner
 */

import React from 'react';
import ngrLogo from '../images/logo.png';

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
      <img className="ngrLogo" src={ngrLogo} alt={this.description} title={this.description} />
    );
  }
}

export default NGRLogo;
