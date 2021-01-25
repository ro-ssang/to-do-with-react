import React from "react";

import classes from "./ToDoForm.module.css";

const toDoForm = (props) => (
  <form className={classes.ToDoForm}>
    <input type="text" placeholder="Add your to do..." />
    <button>Submit</button>
  </form>
);

export default toDoForm;
