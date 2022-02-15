import React from 'react';
//import '../assets/style/priorityLevel.css';

/*
 define root component
*/
export default class PriorityLevel extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

handleClick(){
  this.props.changeLevels(this.props.num);
}

  render() {

    return (
      <div className= { this.props.on ? "level on": "level off"}
           style={this.props.style}
           onClick = {this.handleClick}
      >

      </div>
    );
  }
}
