import {useState} from "react";

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function RandomNumber() {
  const [randomNum, setRandomNum] = useState(generateRandomNumber());
  const changeRandomNum = () => setRandomNum(generateRandomNumber())
return  (
  <div>
    <h1>{randomNum}</h1>
    <button onClick={changeRandomNum}>Generate new Random Number</button>
  </div>
)
}

export default RandomNumber
