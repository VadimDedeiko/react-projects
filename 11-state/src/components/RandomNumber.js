import {useState} from "react";

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function RandomNumber() {
  const [randomNum, setRandomNum] = useState(generateRandomNumber());
return  (
  <div>
    <h1>{randomNum}</h1>
    <button>Generate new Random Number</button>
  </div>
)
}

export default RandomNumber
