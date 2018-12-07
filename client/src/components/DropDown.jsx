import React from 'react';

class DropDown extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      sortBy: 'title',
      displayVal: 'Title'
    };
    
    this.sort = this.sort.bind(this);
  }
  
  sort(condition, display) {
    this.setState({
      sortBy: condition,
      displayVal: display
      }, () => {
        alert(`Sort by ${this.state.sortBy}`);
        // Call the sort function
      }
    );
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="dropdown-container">
            <div className="btn-group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by {this.state.displayVal}
              </button>
              <div className="dropdown-menu">
  
                <div className="dropdown-item text-center" id="title" onClick={this.sort.bind(this, 'title', 'Title')}>Title</div>
                <div className="dropdown-item text-center" id="release_year" onClick={this.sort.bind(this, 'release_year', 'Year')}>Year</div>
                <div className="dropdown-item text-center" id="genre" onClick={this.sort.bind(this, 'genre', 'Genre')}>Genre</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DropDown;
