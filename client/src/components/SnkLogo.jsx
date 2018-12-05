import React from 'react';
import snkLogo from '../images/snk.png';
import snkLogoXS from './../images/snk_60x19.png';

class SnkLogo extends React.Component {
  
  /**
   * @description Text for the alt and title attributes
   * @type {string}
   */
  description = "SNK";
  
  /**
   * @function render
   * @returns {*}
   */
  render() {
    return (
      <div className="col-xs-auto">
        <img className="snkLogo d-none d-sm-block" src={snkLogo} alt={this.description} title={this.description} />
        <img className="snkLogoXS d-block d-sm-none" src={snkLogoXS} alt={this.description} title={this.description} />
      </div>
    );
  }
}

export default SnkLogo;
