import React from 'react';

import Game from './Game';
import {createSorter} from '../util/Sort';

class GameList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      sorters: [
      {
        property: 'title',
        direction: 'asc'
      }
    ]
    };
  }
  
  componentDidMount () {
    fetch('/games')
      .then(res => res.json())
      .then(this.onLoad);
  }
  
  parseData(data) {
    let sorters  = this.state.sorters;
    
    if(data && data.length) {
      if(Array.isArray(sorters) && sorters.length) {
        data.sort(createSorter(...sorters));
      }
    }
    
    return data;
  }
  
  onLoad = (data) => {
    this.setState({
      games: this.parseData(data)
    });
  };
  
  render () {
    
    const data = this.state.games;
    
    return data ?
      this.renderData(data) :
      this.renderLoading()
  }
  
  renderData (data) {
  
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
  
  renderLoading () {
    return <div>Loading...</div>
  }
}

export default GameList;
