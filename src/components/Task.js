import React, { Component } from 'react';

class Task extends Component {
  constructor(props){
    super(props);
    this.state={
      expanded: false,
      checked: false
    }
  }

  toggleExpand(){
    const isExpanded = this.state.expanded;
    if(isExpanded){
      this.setState({expanded: false});
    } else {
      if(!isExpanded){
        this.setState({expanded: true});
      }
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
    const isExpanded = this.state.expanded;
    let subSect;
    let button;

    if (isExpanded) {
      subSect = <div>{this.props.subSect}</div>
    } else {
      if (!isExpanded) {
        subSect = <div className="hidden">{this.props.subSect}</div>
      }
    }

    if (this.props.subSect !== null){
      button = <button onClick={() => this.toggleExpand()}>Show Sub-section</button>
    } else {
      if (this.props.subSect === null){
        button = null;
      }
    }

    return(
      <div>
        <input type="checkbox" id={this.props.text} checked={this.state.checked} onClick={() => this.toggleChecked()}></input>
        <label for={this.props.text}>{this.props.text}</label>
        {button}
        {subSect}
      </div>
    )
  }
}

export default Task;
