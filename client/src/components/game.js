import React from 'react';
import GradientOverlay from './gradient-overlay';

const titleHover = "View game info.";

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
      screenshot: '',
      gameReview: ''
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
      screenshot: this.props.screenshot,
      gameReview: 'Boogey boogey boogey'
    });
  }
  
  
  /**
   * @description The output template of a game
   * @returns {*}
   */
  render() {
    
    return (
      <div className="game" onClick={this.showModal} title={titleHover}>
        <img className="game-screenshot img-fluid" src={`data:image/jpg;base64,${this.state.screenshot}`} alt={this.state.gameTitle} title={this.state.gameTitle} />
        <GradientOverlay/>
        
        {/* Text display for large and extra-large viewports */}
        <div className="game-details-lg d-none d-lg-block">
          <p className="game-year">{this.state.gameYear}</p>
          <h2 className="game-title">{this.state.gameTitle}</h2>
        </div>
        
        {/* Text display for medium viewports */}
        <div className="game-details-md d-none d-md-block d-lg-none">
          <p className="game-year">{this.state.gameYear}</p>
          <h2 className="game-title">{this.state.gameTitle}</h2>
        </div>
        
        {/* Text display for small viewports */}
        <div className="game-details-sm d-none d-sm-block d-md-none">
          <p className="game-year">{this.state.gameYear}</p>
          <h2 className="game-title">{this.state.gameTitle}</h2>
        </div>
        
        {/* Text display for XS viewports */}
        <div className="game-details-xs d-block d-sm-none">
          <p className="game-year">{this.state.gameYear}</p>
          <h2 className="game-title">{this.state.gameTitle}</h2>
        </div>
        
      </div>
    );
  }
  
}

export default Game;
