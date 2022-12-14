import React, {useRef} from 'react'

import './NewTodo.css'

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}
export default function NewToDo(props: NewTodoProps) {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText)
  }
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text'  id="todo-text" ref={textInputRef}/>
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  )
}
