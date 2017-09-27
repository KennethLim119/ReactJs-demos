import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome.js'
import Today from './today.js'
import Counter from './counter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name='DUDUNG' />
        <Today day='Wednesday' />
        <Counter />
      </div>
    );
  }
}

export default App;
