import React, { Component } from 'react';
import List from './List.js';

class AlbumOfTheDay extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <div id="AlbumOfTheDay">
        <h3 className="inline">Today's album:</h3>
        <p className="inline">Today's album</p>
        <h4>List of albums:</h4>
        <List firebase={this.props.firebase} listData="Lists/Album-of-the-day" />
      </div>
    )
  }
}

export default AlbumOfTheDay;
