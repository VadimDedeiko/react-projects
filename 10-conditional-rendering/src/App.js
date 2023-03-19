import "./App.css";
import PetInfo from "./components/PetInfo";
function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={4} hasPet />{/*hasPet можно опускать тру удалять и тогда по умолчанию будет тру*/}
      <PetInfo animal="cat" age={5} hasPet={false} />
    </div>
  );
}

export default App;
