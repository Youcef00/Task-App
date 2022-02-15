import React from 'react';
//import '../assets/style/taskApp.css';
/*
 define root component
*/
export default class DoneTask extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="task">
        <span className="description"> {this.props.description} ({this.props.duration}mn)  (priorité: {this.props.levels})</span>

      </div>
    );
  }
}
