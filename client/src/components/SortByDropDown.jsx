import React from 'react';

class SortByDropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSort : "Name"
    };
  }
  
  render() {
    return (
      <div className="container">
        <div className="btn-group">
          <button type="button" className="btn btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort by {this.state.currentSort}
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Name</a>
            <a className="dropdown-item" href="#">Year</a>
            <a className="dropdown-item" href="#">Genre</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SortByDropDown;
