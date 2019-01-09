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
      sortBy: [
        {
          property: 'title',
          direction: 'asc'
        }
      ]
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
    
    let sortBy  = this.state.sortBy;
    
    console.log("sorters", sortBy);
    console.log("data", data);
    console.log("data length", data.length);
    console.log("sorters length", sortBy.length);
    console.log("...sorters", ...sortBy);
    
    if(data && data.length) {
      if(Array.isArray(sortBy) && sortBy.length) {
        data.sort(createSorter(...sortBy));
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
