import React from "react";

import classes from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem/ToDoItem";

const toDoList = (props) => {
  const toDoItems = props.toDos.map((toDo) => {
    return (
      <ToDoItem
        key={toDo.id}
        text={toDo.text}
        checked={toDo.checked}
        removed={(event) => props.removed(event, toDo.id)}
        toggle={() => props.toggle(toDo.id)}
      />
    );
  });
  return <ul className={classes.ToDoList}>{toDoItems}</ul>;
};

export default toDoList;
