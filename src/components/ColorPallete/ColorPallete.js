import React from "react";

import classes from "./ColorPallete.module.css";
import ColorItem from "./ColorItem/ColorItem";

const colorPallete = (props) => (
  <ul className={classes.ColorPallete}>
    <ColorItem />
    <ColorItem />
    <ColorItem />
    <ColorItem />
  </ul>
);

export default colorPallete;
