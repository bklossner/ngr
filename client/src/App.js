import React from 'react';
import './css/App.css';

import Home from './components/Home';

import Router from '@reach/router';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
