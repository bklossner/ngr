import React from 'react';

class SortByDropDown extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="btn-group">
          <button type="button" className="btn btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort by
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SortByDropDown;
