import React from 'react';
import Task from './task.jsx';
//import '../assets/style/addtask.css';
/*
 define root component
*/
export default class Addtask extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.addTask(this.refs.description.value, this.refs.duree.value);
  }

  render() {
    return (
      <div className="addTask">
        <input type="texte" ref= "description" placeholder="description"/>
        <input type="number" ref="duree" min="1" placeholder="durée"/>
        <button onClick= {this.handleClick}><img src="images/plus.svg" width="35" height="35"/></button>

      </div>
    );
  }
}
