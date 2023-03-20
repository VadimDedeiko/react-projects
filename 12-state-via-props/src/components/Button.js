function Button({count, onClick}) {
  return <button onClick={() => onClick(count + 1)}>Click me</button>
}

export default Button;
