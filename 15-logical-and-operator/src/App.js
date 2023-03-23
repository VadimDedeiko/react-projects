import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import ResetButton from "./components/ResetButton";

function App() {
  const [count, setCount] = useState(10);
  const incrementCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    return setCount(0);
  }
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <ResetButton count={resetCounter()}/>
    </div>
  );
}

export default App;
