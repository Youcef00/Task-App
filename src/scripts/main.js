import ReactDOM from 'react-dom';

// import ReactJs components
import TaskApp from '../components/taskApp.jsx';

/*
* create React root element and insert it into document
*/
const bootstrapReact =
  () => ReactDOM.render(
            <TaskApp />,
            document.getElementById('insertReactHere')
        );


window.addEventListener('DOMContentLoaded', bootstrapReact );


const button = document.querySelectorAll(".header__toggle")[0];

const switchMode = (e) => {
  e.preventDefault();
  if (button.className == "header__toggle white") {
    button.className = "header__toggle dark";
    document.getElementById("switch").innerHTML = '<path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"></path>';
    document.querySelectorAll(".addTask")[0].style.backgroundColor = "#26102A";
    document.querySelectorAll(".addTask")[0].style.boxShadow = "0 5px 14px black";
    document.querySelectorAll(".taskApp > input")[0].style.backgroundColor = "#26102A";
    document.querySelectorAll(".taskApp > input")[0].style.boxShadow = "0 5px 14px black";
    document.querySelectorAll(".tasklist").forEach((task) => {task.style.backgroundColor = "#26102A"; task.style.boxShadow = "0 5px 14px black";}) ;
    document.querySelectorAll(".details_container")[0].style.backgroundColor = "#26102A";
    document.querySelectorAll(".details_container")[0].style.boxShadow = "0 5px 14px black";
    document.querySelectorAll("body")[0].style.backgroundColor = "#111111";
    document.querySelectorAll(".taskApp")[0].style.color = "white";
    //console.log(document.querySelectorAll("#insertReactHere .details_container span"));

    //Array.prototype.slice.call(document.querySelectorAll("#insertReactHere .details_container span")).filter((span) => span.style.color != "purple").forEach((span) => {span.style.color = "black";});

  }
  else{
    button.className = "header__toggle white";
    document.getElementById("switch").innerHTML = '<path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"></path>';
    document.querySelectorAll(".addTask")[0].style.backgroundColor = "white";
    document.querySelectorAll(".addTask")[0].style.boxShadow = "0 5px 14px #DCDCDC";
    document.querySelectorAll(".taskApp > input")[0].style.backgroundColor = "white";
    document.querySelectorAll(".taskApp > input")[0].style.boxShadow = "0 5px 14px #DCDCDC";
    document.querySelectorAll(".tasklist").forEach((task) => {task.style.backgroundColor = "white"; task.style.boxShadow = "0 5px 14px #DCDCDC";}) ;
    document.querySelectorAll(".details_container")[0].style.backgroundColor = "white";
    document.querySelectorAll(".details_container")[0].style.boxShadow = "0 1px 14px #DCDCDC";
    document.querySelectorAll("body")[0].style.backgroundColor = "white";
    document.querySelectorAll(".taskApp")[0].style.color = "black";


    //Array.prototype.slice.call(document.querySelectorAll("#insertReactHere .details_container span")).filter((span) => span.style.color != "purple").forEach((span) => {span.style.color = "white";});
  }
}

button.addEventListener('click', switchMode );
