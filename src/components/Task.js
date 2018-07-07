import React, { Component } from 'react';

class Task extends Component {
  constructor(props){
    super(props);
    this.state={
      expanded: false
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

  render(){
    const isExpanded = this.state.expanded;
    let subSect;
    let button;

    if (isExpanded) {
      subSect = <div>{this.props.subSect}</div>
    } else {
      if (!isExpanded) {
        subSect = null;
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
        <input type="checkbox" id={this.props.text}></input>
        <label for={this.props.text}>{this.props.text}</label>
        {button}
        {subSect}
      </div>
    )
  }
}

export default Task;
