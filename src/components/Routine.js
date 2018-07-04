import React, { Component } from 'react';
import MenuSection from './MenuSection.js';

class Routine extends Component {
  constructor(props){
    super(props);
    this.state = {
      today: this.getDate()
    };
  }

  getDate(){
    var today = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var dayOfWeek = weekdays[today.getDay()];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var mm = months[today.getMonth()];
    var dd = today.getDate();
    var yyyy = today.getFullYear();
    return dayOfWeek + ", " + mm + " " + dd + ", " + yyyy;
  }

  render(){
    return(
      <div className="Routine">
        <header>
          Routine for {this.state.today}:
        </header>
        <main className="menu">
          <MenuSection title="Chores"/>
          <MenuSection title="Workout"/>
          <MenuSection title="Hygiene"/>
          <MenuSection title="Lunch"/>
          <MenuSection title="Finish Up"/>
        </main>
      </div>
    )
  }
}

export default Routine;
