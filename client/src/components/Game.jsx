import React from 'react';
import '../images/baseball_stars_2_480x360.jpg';

class Game extends React.Component {
  
  constructor(props) {
    super(props);
    
    // Define instance/state variables
    this.state = {
      gameTitle: '',
      id: 0,
      gameGenre: '',
      gameDev: '',
      gameRating: 0,
      gameYear: 0,
      gameReview: '',
      showModal: false
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
      gameDev: this.props.dev,
      gameRating: this.props.rating,
      gameYear: this.props.year,
      gameReview: 'Placeholder review text'
    });
  }
  
  /**
   * @description The output template of a game
   * @returns {*}
   */
  render() {
    return (
      // TODO: create the <div> game template
      <div id={this.state.gameTitle} className="game">
        <div className="game-info-container">
          <p className="year">{this.state.gameYear}</p>
          <h2 className="game-title">{this.state.gameTitle}</h2>
        </div>
      </div>
    );
  }
  
}

export default Game;
