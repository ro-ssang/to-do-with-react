import React from "react";

import classes from "./ToDoItem.module.css";

const toDoItem = (props) => (
  <li className={classes.ToDoItem}>
    <button className={classes.CloseBtn}>
      <i className="fas fa-times"></i>
    </button>
    <span className={classes.ToDoText}>React Introduction</span>
    <button className={classes.CheckBtn}>
      <i className="fas fa-check"></i>
    </button>
  </li>
);

export default toDoItem;