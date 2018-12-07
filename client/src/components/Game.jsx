import React from 'react';
import {Link} from '@reach/router';

/**
 * @desc String necessary to encode the screenshot from blob to base64. Prefix this string to the
 * "src" attribute of <img>
 * @type {string}
 */
var imgEncoder = "data:image/jpeg;base64, ";

class Game extends React.Component {
  
  constructor(props) {
    super(props);
    
    // Get all of the game info being passed in the <Game> properties in <GameList>
    this.state = {
      id: this.props.id,
      gameTitle: this.props.title,
      gameGenre: this.props.genre,
      gameYear: this.props.release_year,
      gameScreenshot: imgEncoder + this.props.screenshot
    };
  }
  
  render() {
    return (
      <Link to={"gameinfo/" + this.state.id}>
        <div id={this.state.id} className="game">
          <div className="screenshot-container">
            <img className="screenshot" src={this.state.gameScreenshot} alt={this.state.gameTitle} width="300" height="169" />
            <div className="gradient-overlay" />
          </div>
          <div className="game-year-title">
            <p className="year">{this.state.gameYear}</p>
            <h2 className="game-title">{this.state.gameTitle}</h2>
          </div>
        </div>
      </Link>
    );
  }
  
}

export default Game;
