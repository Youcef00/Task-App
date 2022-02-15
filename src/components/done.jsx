import React from 'react';
import DoneTask from './doneTask.jsx';
//import '../assets/style/tasklist.css';

/*
 define root component
*/
export default class Done extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const doneTasks = this.props.tasks.map((task) => <DoneTask {...task} key= {task.id}/>)
    return (
      <div className="tasklist done">
        <h3>Taches terminées</h3>
        {doneTasks}
      </div>
    );
  }
}
