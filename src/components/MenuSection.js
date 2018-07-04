import React, { Component } from 'react';

class MenuSection extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className="MenuSection">
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default MenuSection;
