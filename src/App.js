import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Daily Routine</h1>
        </header>
        <main>
          <Route exact path="/" component={Routine} />
          <Route path="/stats" component={Stats} />
        </main>
      </div>
    );
  }
}

export default App;
