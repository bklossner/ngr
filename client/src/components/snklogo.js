import React from 'react';
import snkLogo from '../images/snk.png';

class SNKLogo extends React.Component {
  
  /**
   * @type {string}
   */
  description = "SNK";
  
  /**
   * @function render
   * @returns {*}
   */
  render() {
    return (
      <img className="snkLogo" src={snkLogo} alt={this.description} title={this.description} />
    );
  }
}

export default SNKLogo;
