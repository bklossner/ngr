import React from 'react';
import { Link } from '@reach/router';
import { IoIosArrowBack } from 'react-icons/io';
/**
 * @desc Page that displays all of the unique information of a Game. This is displayed
 * when a user clicks on a game's thumbnail image on the GameList component.
 */
class GameInfo extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      developer: '',
      genre: '',
      id: 0,
      rating: 0,
      release_year: 1992,
      review: '',
      title: ''
    }
  }
  
  componentDidMount() {
    // Get the gameId from the game clicked in the thumbnail list
    let gameId = this.props.id;
    
    // Use this id to query the game's unique information
    let self = this;
  
    fetch(`/games/${gameId}`, {
      method: 'GET'})
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        self.setState({
          developer: data[0].developer,
          genre: data[0].genre,
          id: data[0].id,
          rating: data[0].rating,
          release_year: data[0].release_year,
          review: data[0].review,
          title: data[0].title
        });
      })
      .catch(err => {
        console.log('caught it!', err);
      });
  }
  
  render() {
    
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/"><IoIosArrowBack className="back-arrow" /></Link>
            <h1>{this.state.title}</h1>
            <p>{this.state.release_year}</p>
            <p>{this.state.genre}</p>
            <p>{this.state.developer}</p>
            <p>Rating: {this.state.rating}/10</p>
            <p>{this.state.review}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default GameInfo;
