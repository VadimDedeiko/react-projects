import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function UserInfo() {
  const user = useContext(UserContext)
  return (
    <h1>{user}</h1>

    /*<UserContext.Consumer>
      {
        (value) => <h1>{value}</h1>
      }
    </UserContext.Consumer>*/
  );
}

export default UserInfo;
