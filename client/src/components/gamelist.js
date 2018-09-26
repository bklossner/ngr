import React from 'react';
import Game from './game';

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
        console.log(data); // Debug, output resultset to console
        self.setState({games: data});
      })
      .catch(err => {
        console.log('Error', err);
      });
  
  }
  
  render() {
    
    return (
      <div className="row">
        {this.state.games.map(game =>
          <div key={game.id} className="col-sm-4">
            <Game dev={game.developer} genre={game.genre} id={game.id} rating={game.rating} title={game.title} year={game.release_year} screenshot={game.screenshot} />
          </div>
        )}
      </div>
    )
  }
}

export default GameList;
