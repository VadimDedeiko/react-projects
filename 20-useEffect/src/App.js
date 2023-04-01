import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then(response => response.json())
      .then(json => setTodo(json))
  }, []) //если мы укажем в deps todo то мы будем постоянно ререндеринг
  console.log('App rendered');
  console.log(todo);
  return (
    <div className="App">{todo && todo.title}</div>
  );
}

export default App;
