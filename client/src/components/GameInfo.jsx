import React from 'react';

/**
 * @desc Page that displays all of the unique information of a Game. This is displayed
 * when a user clicks on a game's thumbnail image on the GameList component.
 */
class GameInfo extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return(
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <h1>Game Info</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default GameInfo;
