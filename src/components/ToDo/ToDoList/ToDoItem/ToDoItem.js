import React from "react";

import classes from "./ToDoItem.module.css";

const toDoItem = (props) => {
  const toDoTextClasses = [classes.ToDoText];
  const toDoCheckIconClasses = [classes.CheckIcon];
  if (props.checked) {
    toDoTextClasses.push(classes.Checked);
    toDoCheckIconClasses.push(classes.Checked);
  }

  return (
    <li className={classes.ToDoItem} onClick={props.toggle}>
      <button className={classes.CloseBtn} onClick={props.removed}>
        <i className="fas fa-times"></i>
      </button>
      <span
        style={{ color: props.fontColor }}
        className={toDoTextClasses.join(" ")}
      >
        {props.text}
      </span>
      <span className={toDoCheckIconClasses.join(" ")}>
        <i className="fas fa-check"></i>
      </span>
    </li>
  );
};

export default toDoItem;
