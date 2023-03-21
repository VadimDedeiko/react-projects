import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = ["Click me", "Click me please", "Hit me", "Press me"];

function App() {
  const [count, setCount] = useState(10);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCounter} text={text} key={index}/>; //получается ошибка нужен уникальный ключ
      })}
    < /div>
  );
}

export default App;
