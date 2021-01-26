import React from "react";

import classes from "./ColorItem.module.css";

const colorItem = (props) => {
  return (
    <li
      style={{ backgroundColor: props.color }}
      className={classes.ColorItem}
      onClick={props.clicked}
    ></li>
  );
};

export default colorItem;
