import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // const inputChangeHandler = (input, value) => {
  //   console.log(input, value);
  //   setEnteredInput(() => {
  //     return { [input]: [value] };
  //   });
  // };
  const [enterdName, setEnteredName] = useState(" ");
  const [enteredAge, setEnterdAge] = useState(" ");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterdName.trim().length === 0 || enteredAge.trim().length == 0) {
      return;
    }
    props.onAddUser(enterdName, enteredAge);
    console.log(enterdName, enteredAge);
    setEnteredName("");
    setEnterdAge("");
  };
  const handleUserName = (value) => {
    setEnteredName(value);
  };
  const handleAge = (value) => {
    setEnterdAge(value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enterdName}
          onChange={(event) => handleUserName(event.target.value)}
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          value={enteredAge}
          onChange={(event) => handleAge(event.target.value)}
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
