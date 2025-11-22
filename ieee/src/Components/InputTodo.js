import React from 'react'
import {useState} from 'react';

export default function InputTodo(props) {
  const [text,setText] = useState("");

  return (
    <div>
      <input type="text"
       placeholder="Task"
       onChange={(e)=> setText(e.target.value)}
       />
       
      <button onClick= {()=> props.onAdd(text) }>Add Task</button>

    </div>
  );
}
