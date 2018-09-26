import React from 'react';

class Dropdown extends React.Component {

  render() {
    return (
      <div className="container dropdown-container">
        <div className="row justify-content-end">
          <div className="col-xs-12">
            <div className="btn-group">
              <button type="button" className="btn btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Name</a>
                <a className="dropdown-item" href="#">Genre</a>
                <a className="dropdown-item" href="#">Year</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
