import React from 'react';
import Game from './Game';
import {createSorter} from '../util/Sort';

/**
 * @desc Container class that displays the list of games
 */
class GameList extends React.Component {
  
  constructor(props) {
    super(props);
  
    /**
     * @desc Default state values
     * @type {{games: Array, sorters: {property: string, direction: string}[]}}
     */
    this.state = {
      games: [],
      sorters: [
        {
          property: 'title',
          direction: 'asc'
        }]
    };
  }
  
  componentDidMount () {
    // Get the list of games from the database
    fetch('/games')
      .then(res => res.json())
      .then(this.onLoad);
  }
  
  /**
   * @desc Populate the games[] array with the list of games returned from the query
   * @param data
   */
  onLoad = (data) => {
    this.setState({
      games: this.parseData(data)
    });
  };
  
  /**
   * @desc Organize the games[] array determined by the sorters array
   * @param data
   * @return {*}
   */
  parseData(data) {
    let sorters  = this.state.sorters;
    
    if(data && data.length) {
      if(Array.isArray(sorters) && sorters.length) {
        data.sort(createSorter(...sorters));
      }
    }
    
    return data;
  }
  
  render() {
    
    let data = this.state.games;
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="game-list-container">
              {
                data.map(game =>
                  <Game key={game.id} {...game} />
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default GameList;
