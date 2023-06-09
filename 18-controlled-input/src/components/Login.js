import { useState } from "react";
//TODO COMMENTED IS DELETING FOR REFACTORING THROW DESTRUCTION
function Login() {
  /*const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");*/
  const [data, setData] = useState({name: "", password: ""});
  function handleFormSubmit(event) {
    console.log(event);
    event.preventDefault();
    /*console.log(event.target.username.value);
    console.log(event.target.password.value);*/
    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text.target.value }); //[name] динамически создает и именует свойства в объекте для разных инпутов
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" value={data.name} onChange={(e) => handleInputChange(e, 'name')} />
        </label>
        <label>
          Password:
          <input type="password" value={data.password} onChange={(e) => handleInputChange(e, 'password')} />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
