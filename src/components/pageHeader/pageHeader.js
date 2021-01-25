import React from "react";

import classes from "./pageHeader.module.css";

const pageHeader = (props) => (
  <header className={classes.PageHeader}>
    <h1>Today's To Do List</h1>
  </header>
);

export default pageHeader;