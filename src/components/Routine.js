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
    const choresItems=[{
      text: "Listen to your album of the day",
      subSect: null
    }, {
      text: "Pick up trash in your room",
      subSect: null
    }, {
      text: "Pick up your dirty clothes",
      subSect: null
    }];

    const workoutItems=[{
      text: "Stretch",
      subSect: null
    }, {
      text: "Complete your workout of the day",
      subSect: null
    }];

    const hygieneItems=[{
      text: "Shower",
      subSect: null
    }, {
      text: "Dry off",
      subSect: null
    }];

    const lunchItems=[{
      text: "Eat lunch",
      subSect: null
    }, {
      text: "Read while you eat",
      subSect: null
    }];

    const finishItems=[{
      text: "Eat a serving of veggies",
      subSect: null
    }, {
      text: "Meditate for 10 minutes to clear your head",
      subSect: null
    }];

    return(
      <div className="Routine">
        <header>
          {this.state.today}
        </header>
          <main className="menu">
            <MenuSection title="Chores" items={choresItems}/>
            <MenuSection title="Workout" items={workoutItems}/>
            <MenuSection title="Hygiene" items={hygieneItems}/>
            <MenuSection title="Lunch" items={lunchItems}/>
            <MenuSection title="Finish Up" items={finishItems}/>
          </main>
      </div>
    )
  }
}

export default Routine;
