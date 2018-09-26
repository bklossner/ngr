/**
 * @class GradientOverlay
 * @description A gradient overlay that will darken an image, from top (light) to bottom (dark)
 * @author Bob Klossner
 */

import React from 'react';

class GradientOverlay extends React.Component {
  
  /**
   * @description Defines the styles (CSS)
   * @type {{content: string, position: string, top: number, left: number, backgroundImage: string, opacity: number, width: string, height: string}}
   */
  overlayStyles = {
    content : '',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
    opacity: 0.6,
    width: '100%',
    height: '200px'
  };
  
  render(){
    return (
      <div className="gradient-overlay" style={this.overlayStyles} />
    );
  }
}

export default GradientOverlay
