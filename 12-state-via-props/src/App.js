import {useState} from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
function App() {
  const [count, setCount] = useState(10);
  return (
    <div className="App">
      <Counter count={count}/>
      <Button count={count} onClick={setCount}/>
      <Button count={count} onClick={setCount}/>
      <Button count={count} onClick={setCount}/>
      <Button count={count} onClick={setCount}/>
    </div>
  );
}

export default App;
