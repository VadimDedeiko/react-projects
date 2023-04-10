import "./App.css";
import { useState } from "react";
import User from "./components/User";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState('Bogdan');
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <User user={user} />
      </div>
    </UserContext.Provider>
  )
}

export default App;
