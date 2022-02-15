import React from 'react';
import PriorityLevel from './priorityLevel.jsx';
//import '../assets/style/priorityScale.css';
/*
 define root component
*/
export default class PriorityScale extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const levels = [];
    for (let i = 0; i < 6; i++) {
      if (i<this.props.levels) {
        levels.push(<PriorityLevel num={i+1} on= {true} changeLevels={this.props.changeLevels}  key={i} />);
      }
      else {
        levels.push(<PriorityLevel num={i+1} on= {false} changeLevels={this.props.changeLevels}   key= {i+1} />);
      }
    }

    return (
      <div className="scale">
        {levels}
        <span>{this.props.levels}/6</span>
      </div>
    );
  }
}
