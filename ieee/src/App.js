import React from 'react'
import {useState} from 'react';
import InputTodo from './Components/InputTodo';
import TodoList from './Components/TodoList';
import './styles/todo.css';


export default function App() {
  const [tasks,setTasks] = useState([ 
    
    "Prepare weekly report.",
  "Review system documentation.",
  "Update project repository.",
  "Fix UI responsiveness issue."
  ]);


  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
  const newTask = tasks.filter((task,i) => i !== index);
  setTasks(newTask);
  }

  return (
    <div className="App">

      <div className="app-header">
     <img src="/ieee_img.jpg" alt="IEEE Logo" />
      </div>

      <h1 className="main-title">Department of Technology</h1>
      <h2 className="subtitle">Technical Department Tasks:</h2>
      <div className="container">
      <InputTodo onAdd={addTask} />
      <TodoList tasks={tasks} onDelete={deleteTask}/>
        </div>
    </div>
  )
}
