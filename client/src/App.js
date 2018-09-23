import React from 'react';
import './css/App.css';
import Header from './components/header';
import SortByDropDown from './components/SortByDropDown';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <SortByDropDown/>
      </div>
    );
  }
}

export default App;
