import React from 'react';
import PriorityScale from './priorityScale.jsx';
//import '../assets/style/task.css';
//import '../assets/style/doneButton.css';
/*
 define root component
*/
export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: 1

    }
    this.changeLevels = this.changeLevels.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

changeLevels(newLevel){
  this.setState( {levels: newLevel});
  this.props.updateLevel(this.props.id, newLevel);
  }

componentDidMount(){
  if (this.props.levels != null){
    this.setState({levels: this.props.levels});
  }
}

handleClick(){
  this.props.doneTask(this.props.id);

}
  render() {
    return (
      <div className="task">
        <span className="info"> {this.props.description} ({this.props.duration}mn) </span>
        <PriorityScale levels= {this.state.levels} changeLevels= {this.changeLevels} />
        <label className="doneButton" onClick= {this.handleClick} ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg></label>
      </div>
    );
  }
}
