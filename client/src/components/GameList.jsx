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
        console.log(data);
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
        {this.state.games.map(game =>
          <div className="col-sm-4">
            <Game key={game.id} dev={game.developer} genre={game.genre} id={game.id} rating={game.rating} title={game.title} year={game.release_year} />
          </div>
        )}
        </div>
      </div>
    )
  }
}

export default GameList;
