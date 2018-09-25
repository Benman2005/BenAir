import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ben Air</h1>
        </header>
          <Home />
      </div>
    );
  }
}

export default App;
