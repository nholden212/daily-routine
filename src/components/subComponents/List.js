import React, { Component } from 'react';
import ListItem from './ListItem.js';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
    this.itemsRef = this.props.firebase.database().ref("Lists/Album-of-the-day");
  }

  componentDidMount() {
    this.itemsRef.on('child_added', snapshot => {
      const item = snapshot.val();
      this.setState({ items: this.state.items.concat( item ) });
     });
   }

  render(){
    return(
      <div>
        {this.state.items.map( (item, index) =>
            <ListItem key={index} value={item} />
        )}
      </div>
    )
  }
}

export default List;
