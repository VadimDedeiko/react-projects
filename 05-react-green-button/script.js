const App = ({ initialButtonText, initialClass } ) => {//props is an object that contains field(property) buttonText
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [setClassList, setNewClassName] = React.useState(initialClass)
  const onButtonClick = () => {
    setButtonText('Hello from React');
    setNewClassName('green-btn')
  }
  return (
    <div className="app">
      <button className={setClassList} onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};
const container = document.getElementById('app');//находим html with id="app"
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialClass=""/>)
