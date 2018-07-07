import React, { Component } from 'react';
import MenuSection from './MenuSection.js';
import AlbumOfTheDay from './subComponents/AlbumOfTheDay.js';

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
      subSect:
        <AlbumOfTheDay firebase={this.props.firebase} listData='Album-of-the-day' />
    }, {
      text: "Pick up trash in your room",
      subSect: null
    }, {
      text: "Pick up your dirty clothes",
      subSect: null
    }, {
      text: "Bring all dirty dishes from your room into the kitchen",
      subSect: null
    }, {
      text: "Otherwise tidy up your room",
      subSect: null
    }, {
      text: "Make your bed",
      subSect: null
    }, {
      text: "Start any laundry you need to do",
      subSect: null
    }, {
      text: "Start preparing two eggs for breakfast",
      subSect: null
    }, {
      text: "Empty the dishwasher",
      subSect: null
    }, {
      text: "Reload the dishwasher",
      subSect: null
    }, {
      text: "Tidy up the family room",
      subSect: null
    }, {
      text: "Eat breakfast",
      subSect: null
    }, {
      text: "Review and update your budget",
      subSect:
        <div>
          You should be able to:
          <ul>
            <li>View your current account balances</li>
            <li>View your current budgets</li>
            <li>Enter a new transaction</li>
            <li>Adjust your budgets</li>
          </ul>
        </div>
    }, {
      text: "Review and update your to-do list",
      subSect: "Create a basic to-do list"
    }, {
      text: "Put away any clean dishes",
      subSect: null
    }, {
      text: "Wash the rest of the dirty dishes",
      subSect: null
    }, {
      text: "Wipe down the kitchen counters where necessary",
      subSect: null
    }, {
      text: "Take out the trash and recycling",
      subSect: null
    }];

    const workoutItems=[{
      text: "Stretch",
      subSect: "Should show your stretching routine"
    }, {
      text: "Grab a banana to eat in the car",
      subSect: null
    }, {
      text: "Complete your workout of the day",
      subSect: "Should show your workout of the day, depending on the day of the week"
    }, {
      text: "Read today's New York Times Morning Briefing",
      subSect: "Should link to today's morning briefing"
    }, {
      text: "Read about today's album of the day",
      subSect: "Should do a search on Google, Wikipedia, and/or Pitchfork for the first item on the album of the day list"
    }, {
      text: "Read about your News and Politics topic of the day",
      subSect: "Should do a search on Google and/or Wikipedia for the first item on your News and Politics list (store in the program but don't render anywhere)"
    }, {
      text: "Swing by the grocery store to get anything you need for lunch/dinner",
      subSect: null
    }];

    const hygieneItems=[{
      text: "Make and drink a protein shake",
      subSect: null
    }, {
      text: "Shower",
      subSect: null
    }, {
      text: "Dry off",
      subSect: null
    }, {
      text: "Comb your hair",
      subSect: null
    }, {
      text: "Shave/groom",
      subSect: null
    }, {
      text: "Use acne cream",
      subSect: null
    }, {
      text: "Use Preparation H",
      subSect: null
    }, {
      text: "Brush your teeth",
      subSect: null
    }, {
      text: "Floss",
      subSect: null
    }, {
      text: "Massage your gums with your rubber tip",
      subSect: null
    }, {
      text: "Put on lotion",
      subSect: null
    }, {
      text: "Use deodorant",
      subSect: null
    }, {
      text: "Use hair gel",
      subSect: null
    }, {
      text: "Clip your nails",
      subSect: null
    }, {
      text: "Weigh yourself",
      subSect:
        <div>
          You should be able to:
          <ul>
            <li>View a table of your weight day-by-day</li>
            <li>Enter your weight for the current day</li>
          </ul>
        </div>
    }, {
      text: "Get dressed",
      subSect: null
    }, {
      text: "Eat an apple",
      subSect: null
    }];

    const lunchItems=[{
      text: "Eat some salad for lunch",
      subSect: null
    }, {
      text: "Read while you eat",
      subSect: null
    }];

    const studyItems=[{
      text: "Complete your checkpoints for the day",
      subsect: null
    }]

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
            <MenuSection title="Study" items={studyItems}/>
            <MenuSection title="Finish Up" items={finishItems}/>
          </main>
      </div>
    )
  }
}

export default Routine;
