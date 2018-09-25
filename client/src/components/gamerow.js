import React from 'react';
import Game from './game';

class GameRow extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      this.state.games.map(game =>
        <div className="col-sm-4">
          <Game key={game.id} dev={game.developer} genre={game.genre} id={game.id} rating={game.rating} title={game.title} year={game.release_year} />
        </div>
      )
    );
  }

}

export default GameRow;
