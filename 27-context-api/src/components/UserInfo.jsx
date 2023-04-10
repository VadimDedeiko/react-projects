import React from "react";

function UserInfo() {
  return (
    <UserContext.Consumer>
      {
        (value) => <h1>{value}</h1>
      }
    </UserContext.Consumer>
  );
}

export default UserInfo;
