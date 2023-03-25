function Wrapper(props) {
  return <div style={{backgroundColor: props.color}}>
<h1>{props.children}</h1>
  </div>
}

export default Wrapper
