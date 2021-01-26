import React from "react";

import classes from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem/ToDoItem";

const toDoList = (props) => (
  <ul className={classes.ToDoList}>
    <ToDoItem />
  </ul>
);

export default toDoList;
