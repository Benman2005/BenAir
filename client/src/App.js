import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Logs from './components/Logs';
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Link to={'/home'}><h1 className="App-title">Ben Air</h1></Link>
        </header>
        <Route exact path="/home" component={Home} />
        <Route exact path="/logs" component={Logs} />
        <Route exact path="/" render={ () => <Redirect to="/home" /> } />
        <Link to={'/logs'}><p style={{float: "right", padding:"10px"}}> See logs</p></Link>
      </div>
      </Router>
    );
  }
}

export default App;
