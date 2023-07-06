import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uList) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: uName,
          age: uList
        }
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList}></UsersList>
    </div>
  );
}

export default App;
