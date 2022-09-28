import React from 'react'
import './TodoList.css'
interface TodoListProps {
  items: {id: string, text: string}[],
  onDeleteTodo: (id: string) => void,
}
export default function ToDoList(props : TodoListProps) {
  return (
    <ul>
      {props.items.map(el => {
        return (
          <li key={el.id}>
            <span>
              {el.text}
            </span>
            <button onClick={() => props.onDeleteTodo(el.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}
