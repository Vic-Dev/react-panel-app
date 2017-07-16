import React, { Component } from 'react';
import Panel from './Panel.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel value={ "Panel 1" } />
      </div>
    );
  }
}

export default App;
