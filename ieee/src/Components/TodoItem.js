import React from 'react'

export default function TodoItem(props) {
  return (
    <div className="todo-item">
      <span>{props.item}</span>
      <button onClick ={props.onDelete}>Delete</button>
    </div>
  )
}
