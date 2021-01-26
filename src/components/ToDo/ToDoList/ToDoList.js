import React from "react";

import classes from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem/ToDoItem";

const toDoList = (props) => {
  const toDoItems = props.toDos.map((toDo, index) => {
    // convert a key value of toDoItem to id...
    return <ToDoItem key={index} text={toDo.text} />;
  });
  return <ul className={classes.ToDoList}>{toDoItems}</ul>;
};

export default toDoList;
