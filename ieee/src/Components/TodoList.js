import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList(props) {
  return (
    <div>
      <h3>Tasks List:</h3>
<ol>
      {props.tasks.map((task,index) =>(

         <li key={index}>
         <TodoItem item={task} onDelete= {()=> props.onDelete(index)} />
         </li>
        
      ))}
      </ol>
    </div>
  )
}
