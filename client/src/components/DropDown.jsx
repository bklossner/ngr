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
  
  /**
   * @desc Set the state to the new values selected in the dropdown
   * @param condition
   * @param display
   */
  sort(condition, display) {
    this.setState({
      sortBy: condition,
      displayVal: display
      }
    );
  }
  
  /**
   * @desc When the dropdown selection has changed, notify <GameList> to re-render (somehow)
   * @param prevProps
   * @param prevState
   * @param snapshot
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    alert("Dropdown has been changed");
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
