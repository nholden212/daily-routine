import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import * as firebase from 'firebase';
import Routine from "./components/Routine";
import Stats from "./components/Stats";

var config = {
    apiKey: "AIzaSyAuVWWBOdJxktjBVNzDVJDW6XcLfHhQxKE",
    authDomain: "daily-routine-nh212.firebaseapp.com",
    databaseURL: "https://daily-routine-nh212.firebaseio.com",
    projectId: "daily-routine-nh212",
    storageBucket: "daily-routine-nh212.appspot.com",
    messagingSenderId: "539322993070"
  };
  firebase.initializeApp(config);

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
          <Route exact path="/" render={() => <Routine firebase={firebase}/>} />
          <Route path="/stats" component={Stats} />
        </main>
      </div>
    );
  }
}

export default App;
