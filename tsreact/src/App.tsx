import "./App.css";

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let table: number[];
// let role: [number, string]; //  A tuple is a typed array with a pre-defined length and types for each index.

// // type Person = { // this is called
// //   name: string;
// //   age?: number;
// // };

// // have type and interface

// // we can do it with interface

// type P = {
//   p: string;
// };

// interface Person extends P {
//   name: string;
//   age?: number;
// }

// // so whats is difference then

// type X = Person & {
//   a: string;
//   b: number;
// };
// type Y = X & {
//   c: string;
//   d: number;
// };
// const y: Y = {
//   c: "shsh",
//   d: 33,
// };

// interface Guy extends Person {
//   profession: string;
// }

// // we can use any type to anything but its not recommended!

// // let printName: unknown;
// // let printName: Function;
// // let printName: (name: string) => void;
// // let printName: (name: string) => number;
// // let printName: (name: string) => never;

// // age = "skdkd";

// // function printName(name: string) {
// //   console.log(name);
// // // }
// // printName("kunal");

// const person: Person = {
//   name: "kunal",
// };

// let lotsOfPeople: Person[];

// function App() {
//   return <>hello world</>;
// }

// export default App;

import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

// react fc is functional component
// another is react reactNode

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); // array of type interface

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
