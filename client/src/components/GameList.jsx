import React from 'react';

import Game from './Game';
import {createSorter} from '../util/Sort';

class GameList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      sorters: this.props.sorters
    };
  }
  
  static defaultProps = {
    sorters: [
      { property: 'title' },
      { property: 'release_year' },
      { property: 'genre'}
      ]
  };
  
  componentDidMount () {
    fetch('/games')
      .then(res => res.json())
      .then(this.onLoad);
  }
  
  parseData(data) {
    const { sorters } = this.state;
    
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
    
    if (data && data.length) {
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
    } else {
      return <div>No games found</div>
    }
  }
  
  renderLoading () {
    return <div>Loading...</div>
  }
}

export default GameList;
