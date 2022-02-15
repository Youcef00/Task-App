import React from 'react';
import Task from './task.jsx';
//import '../assets/style/tasklist.css';
/*
 define root component
*/
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks.map((task) => <Task {...task} doneTask= {this.props.doneTask} updateLevel= {this.props.updateLevel} id= {task.id} key= {task.id}/>)
    return (
      <div className="tasklist todo">
        <h3>Taches en cours</h3>
        {tasks}
      </div>
    );
  }
}
