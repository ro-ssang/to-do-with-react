import React from "react";

import classes from "./ToDoItem.module.css";

const toDoItem = (props) => (
  <li className={classes.ToDoItem}>
    <button className={classes.CloseBtn} onClick={props.removed}>
      <i className="fas fa-times"></i>
    </button>
    <span className={classes.ToDoText}>{props.text}</span>
    <button className={classes.CheckBtn}>
      <i className="fas fa-check"></i>
    </button>
  </li>
);

export default toDoItem;
