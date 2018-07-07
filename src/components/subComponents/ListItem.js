import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.state={
      checked: false
    }
  }

  toggleChecked(){
    const isChecked = this.state.checked;
    if(isChecked){
      this.setState({checked: false});
    } else {
      if(!isChecked){
        this.setState({checked: true});
      }
    }
  }

  render(){
    return(
      <div>
        <input type="checkbox" id={this.props.value} checked={this.state.checked} onClick={() => this.toggleChecked()}></input>
        <label for={this.props.value}>{this.props.value}</label>
      </div>
    )
  }
}

export default ListItem;
