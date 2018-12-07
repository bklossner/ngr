import React from 'react';

class DropDown extends React.Component {
  
  initialSort = 'title';
  
  constructor(props) {
    super(props);
    
    this.state = {
      sortBy : this.initialSort,
      sortByDisplay : this.capitalizeFirstLetter(this.initialSort)
    };
    
    this.sortByName = this.sortByName.bind(this);
    this.sortByYear = this.sortByYear.bind(this);
    this.sortByGenre = this.sortByGenre.bind(this);
  }
  
  /**
   * @desc Utility function to capitalize the first letter in a string. Used in displaying
   * the dropdown in this case
   * @param string
   * @return {string}
   */
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // TODO: There has to be a better way to get the selected sort value instead of having three unique functions.
  
  /**
   * @desc Function to sort by game name.
   */
  sortByName() {
    this.setState({
      sortBy: 'title',
      sortByDisplay: this.capitalizeFirstLetter('title')
    }, () => {
      this.sort();
    });
  };
  
  /**
   * @desc Function to sort by game release_year
   */
  sortByYear() {
    this.setState({
      sortBy: 'release_year',
      sortByDisplay: this.capitalizeFirstLetter('year')
    }, () => {
      this.sort();
    });
  };
  
  /**
   * @desc Function to sort by game genre
   */
  sortByGenre() {
    this.setState({
      sortBy: 'genre',
      sortByDisplay: this.capitalizeFirstLetter('genre')
    }, () => {
      this.sort();
    });
  };
  
  /**
   * @desc Function to run the sort method and display the newly reordered list
   */
  sort() {
    let sorters = [{ property: this.state.sortBy, direction: 'ASC' }];
  };
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="dropdown-container">
            <div className="btn-group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by {this.state.sortByDisplay}
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-item text-center" id="title" onClick={this.sortByName}>Title</div>
                <div className="dropdown-item text-center" id="release_year" onClick={this.sortByYear}>Year</div>
                <div className="dropdown-item text-center" id="genre" onClick={this.sortByGenre}>Genre</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DropDown;
