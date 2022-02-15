import React from 'react';

//import '../assets/style/taskApp.css';
import Todo from './todo.jsx';
import Done from './done.jsx';
import AddTask from './addTask.jsx';
/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      done: [],
      len: 0,
      filterText: ''
    }


    this.doneTask = this.doneTask.bind(this);
    this.updateLevel = this.updateLevel.bind(this);
    this.addTask = this.addTask.bind(this);
    this.filterChange = this.filterChange.bind(this);
    this.componentCleanup = this.componentCleanup.bind(this);
  }

  doneTask(id){
    const copyTasks = [...this.state.done];

    copyTasks.push (this.state.todo.find((task) => id === task.id));
    this.setState({ todo: this.state.todo.filter((task) => id !== task.id) } );
    this.setState( {done: copyTasks });

    window.localStorage.setItem('done', copyTasks);
  }

  updateLevel(id, level){
    const copyTasks = [...this.state.todo];
    this.state.todo.forEach((task) => { if(id === task.id){task.levels = level;}  });


    this.setState( {todo: copyTasks});
    this.setState((prevState) => ({todo: prevState.todo.sort((a, b) => b.levels - a.levels)}) );
  }

  async addTask(description, duree){
    await this.setState((prev) => ({len: prev.len+1}) );
    const task = {
      id : 'T'+(this.state.len),
      description : description,
      duration : duree,
      levels: 1
    };

    const copyTasks = [...this.state.todo, task];

    this.setState( {todo: copyTasks});
    window.localStorage.setItem('todo', copyTasks);

  }

async componentDidMount() {
    window.addEventListener('beforeunload', this.componentCleanup);

    // simulate fetching data from data base and stores it into this.state.persons
    /*const data = await simulateFetch('http://source.of.data/todo');
    this.setState({ todo : data });*/

    let todoData = window.localStorage.getItem('todo');
    //console.log(todoData);
    if (todoData === null) {
      todoData = [];
    } else {
      todoData = JSON.parse(window.localStorage.getItem('todo'));
    }
    //console.log(todoData);
    let doneData = window.localStorage.getItem('done');

    if (doneData === null) {
      doneData = [];
    } else {
      doneData = JSON.parse(window.localStorage.getItem('done'));
    }

    await this.setState({ todo : todoData, done: doneData });

    this.setState( {len: todoData.length + doneData.length });
    //console.log(`length: ${this.state.done.length}`);

    // deco
    const spans = document.querySelectorAll("#insertReactHere .details_container span");

    spans[1].addEventListener('click', () => {
        spans[1].style.color = "purple";
        spans[2].style.color = "grey";
        spans[3].style.color = "grey";
        document.querySelectorAll(".todo")[0].style.display = "";
        document.querySelectorAll(".done")[0].style.display = "";
    });

    spans[2].addEventListener('click', () => {

        spans[2].style.color = "purple";
        spans[1].style.color = "grey";
        spans[3].style.color = "grey";
        document.querySelectorAll(".todo")[0].style.display = "";
        document.querySelectorAll(".done")[0].style.display = "none";
    });

    spans[3].addEventListener('click', () => {
        spans[3].style.color = "purple";
        spans[1].style.color = "grey";
        spans[2].style.color = "grey";
        document.querySelectorAll(".todo")[0].style.display = "none";
        document.querySelectorAll(".done")[0].style.display = "";
    });

  }

filterChange(event){
  this.setState({filterText: event.target.value});

}

componentCleanup(){
  window.localStorage.setItem('todo', JSON.stringify(this.state.todo));
  window.localStorage.setItem('done', JSON.stringify(this.state.done));

}

componentWillUnmount(){
  this.componentCleanup();
  window.removeEventListener('beforeunload', this.componentCleanup);
}

  render() {
    const tasks = this.state.todo.filter(task => task.description.toLowerCase().includes(this.state.filterText));

    return (
      <div className="taskApp">
        <AddTask addTask= {this.addTask} />
        <input type="texte" placeholder="filtre" onChange= {this.filterChange}/>
        <div className="details_container" ><span>{this.state.todo.length} items left</span> <span>all</span> <span>active</span> <span>completed</span> </div>
        <Todo tasks= {tasks} doneTask= {this.doneTask} updateLevel= {this.updateLevel} />
        <Done tasks= {this.state.done} />

      </div>
    );
  }
}
/*
import tasks from '../data/tasksData.js';
const simulateFetch = async mockURL => {
    await setTimeout( () => console.log(`simulate fetching data from ${mockURL}`), 10);
    return tasks;
}*/
