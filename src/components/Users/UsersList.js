import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.nodule.css";
const UsersList = (props) => {
  return (
    <Card className={classes.user}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} {user.age} years Old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
