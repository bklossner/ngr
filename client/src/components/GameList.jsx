import React from 'react';

import Game from './Game';

class GameList extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      games: []
    }
  }
  
  componentDidMount() {
    
    let self = this;
    
    fetch('/games', {
      method: 'GET'})
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        self.setState({games: data});
      })
      .catch(err => {
        console.log('caught it!', err);
      })
  }
  
  render() {
    
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-12">
            <div className="game-list-container">
              
              {this.state.games.map(game =>
                <Game key={game.id} {...game} />
              )}
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default GameList;
