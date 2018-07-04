import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Routine from "./components/Routine";
import Stats from "./components/Stats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="nav">
            <Link className="navLink" to="/">Routine</Link>
            <Link className="navLink" to="/stats">Stats</Link>
          </nav>
          <h1 className="mainTitle">Daily Routine</h1>
        </header>
        <main className="main">
          <Route exact path="/" component={Routine} />
          <Route path="/stats" component={Stats} />
        </main>
      </div>
    );
  }
}

export default App;
