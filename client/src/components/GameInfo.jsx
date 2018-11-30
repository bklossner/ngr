import React from 'react';

/**
 * @desc Page that displays all of the unique information of a Game. This is displayed
 * when a user clicks on a game's thumbnail image on the GameList component.
 */
class GameInfo extends React.Component {
  
  componentDidMount() {
    let gameId = this.props.id;
    console.log("gameId", gameId);
  }
  
  render() {
    
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{this.props.id}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default GameInfo;
