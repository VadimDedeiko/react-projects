import { useState } from "react";
import generateRandomNumber from "../utils/generateRandomNum";

function RandomNumber(props) {
  const num = props.maxNum;
  const [randomNum, setRandomNum] = useState(generateRandomNumber(num));
  const changeRandomNum = () => setRandomNum(generateRandomNumber(num));
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new Random Number</button>
    </div>
  );
}

export default RandomNumber;
