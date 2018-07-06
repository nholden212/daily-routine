import React, { Component } from 'react';

class MenuSection extends Component {
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
    let itemList;

    if (isExpanded) {
      itemList =
      <div>
        {this.props.items.map( (item, index) =>
          <div>
            <input type="checkbox" id={item.text}></input>
            <label for={item.text}>{item.text}</label>
          </div>
        )}
      </div>
    } else {
      itemList = null;
    }

    return(
      <div className="MenuSection">
        <h2>{this.props.title}</h2>
        <button onClick={() => this.toggleExpand()}>Expand</button>
        {itemList}
      </div>
    )
  }
}

export default MenuSection;
