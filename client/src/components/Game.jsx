import React from 'react';
import {Link} from '@reach/router';

/**
 * @desc The screenshot needs to be decoded and set as base64. Prefix this string to the
 * "src" attribute of <img>
 * @type {string}
 */
var imgEncoding = "data:image/jpeg;base64, ";

class Game extends React.Component {
  
  constructor(props) {
    super(props);
    
    // Define instance/state variables
    this.state = {
      id: 0,
      gameTitle: '',
      gameGenre: '',
      gameRating: 0,
      gameYear: 0,
      screenshot: ''
    };
  }
  
  /**
   * @description Load the game's information from the server
   */
  componentDidMount() {
    // TODO: Load the game's data here
    this.setState({
      id: this.props.id,
      gameTitle: this.props.title,
      gameGenre: this.props.genre,
      gameRating: this.props.rating,
      gameYear: this.props.release_year,
      gameScreenshot: imgEncoding + this.props.screenshot
    });
  }
  
  /**
   * @description The output template of a game
   * @returns {*}
   */
  render() {
    return (
      <Link to={"gameinfo/" + this.state.id}>
        <div id={this.state.id} className="game">
          <div className="screenshot-container">
            <img className="screenshot" src={this.state.gameScreenshot} alt={this.state.gameTitle} width="300" height="169" />
            <div className="gradient-overlay" />
          </div>
          <div className="game-info-container">
            <p className="year">{this.state.gameYear}</p>
            <h2 className="game-title">{this.state.gameTitle}</h2>
          </div>
        </div>
      </Link>
    );
  }
  
}

export default Game;
