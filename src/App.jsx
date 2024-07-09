import React, { useState,useEffect } from 'react';
import './App.css';
import Taskcolumn from './component/Taskcolumn';
import Taskform from "./component/Taskform";
import Todo from "./assets/todo.webp";
import Doing from "./assets/doing.jpg";
import Done from "./assets/done.png";

// const oldTask= localStorage.getItem("tasks");
// console.log(oldTask)

function App() {
  const [tasks, setTasks] = useState([]);

  // useEffect(()=>{
  //    localStorage.setItem("tasks",JSON.stringify(tasks))
  //      },[tasks])
  
  const HandleDelete =(taskIndex)=>{
         const newTask= tasks.filter((task,index)=> index!==taskIndex)
         setTasks(newTask)
  }
  return (
    <div className="app">
      <Taskform setTasks={setTasks} />

      <main className="main">
        <Taskcolumn name="TODO" icon={Todo} tasks={tasks} status="To Do"  HandleDelete={HandleDelete}/>
        <Taskcolumn name="DOING" icon={Doing} tasks={tasks} status="Doing" HandleDelete={HandleDelete}/>
        <Taskcolumn name="DONE" icon={Done} tasks={tasks} status="Done" HandleDelete={HandleDelete}/>
      </main>
    </div>
  );
}

export default App;
