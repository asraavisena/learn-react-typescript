import React, {useState} from 'react';
import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';
import {ToDo} from './models/todo.model'
// // UNION
// let unionTest: string | boolean;
// // UNKNOWN beter use unknown than any
// let testAny: unknown

// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[];
// // TUPLE
// let role: [number, string];

// let person: Object;
// // TYPE -> alias using ex:
// // type Person = interPerson & {blablabla}
// type Person = {
//   name: string;
//   age?: number; // with ? it will be optional
// }
// // INTERFACE -> using extends if want to extends
// interface interPerson extends Person {
//   profesion: string,
//   zip: number,
// }

// type PersonTypeTest2 = interPerson & {
//   name: string;
//   age?: number; // with ? it will be optional
// }
// //
// let person1: PersonTypeTest2 = {
//   name: 'test',
//   profesion: "sa",
//   zip: 212
//   // age:22
// }
// let alotOfPeople: Person[]

// // assign function
// // void return undefined never -> no return anything
// let printName: (name: string) => void

function App() {
  const [todos, setTodos] = useState<ToDo[]>([])
  // const todos = [{id: 't1', text: 'finish the course'}]
  const todoAddHandler = (todoText: string) => {
    // ! NORMAL FORM
    // setTodos([...todos, {id: Math.random().toString(), text: todoText}])
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text: todoText}
    ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos=> {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }
  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
