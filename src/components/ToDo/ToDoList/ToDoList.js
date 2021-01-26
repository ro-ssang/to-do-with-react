import React from "react";

import classes from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem/ToDoItem";

const toDoList = (props) => {
  const toDoItems = props.toDos.map((toDo) => {
    return (
      <ToDoItem
        key={toDo.id}
        text={toDo.text}
        removed={() => props.removed(toDo.id)}
      />
    );
  });
  return <ul className={classes.ToDoList}>{toDoItems}</ul>;
};

export default toDoList;
