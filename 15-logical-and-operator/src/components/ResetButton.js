function ResetButton({count})  {
  return count > 0 && //or we can use double not operator !!count
    <div>
      <button style={{ backgroundColor: "lightgreen" }} onClick={resetCounter}>Reset</button>
    </div>;
}

export default ResetButton;
