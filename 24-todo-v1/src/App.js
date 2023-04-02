import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_,idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler}></TodoForm> {/*//тодоформа имеет свойство добавлять что то*/}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler}></TodoList>
    </div>
  );
}

export default App;
