import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleFormSubmit(event) {
    console.log(event);
    event.preventDefault();
    /*console.log(event.target.username.value);
    console.log(event.target.password.value);*/
    const userData = {
      username,
      password,
    }
    console.log(userData);
    alert(JSON.stringify(userData));
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
