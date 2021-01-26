import React from "react";

import classes from "./ColorPallete.module.css";
import ColorItem from "./ColorItem/ColorItem";

const colorPallete = (props) => {
  const colorItems = props.colorCodes.map((colorCode, index) => (
    <ColorItem
      key={index}
      color={colorCode}
      clicked={() => props.clicked(colorCode)}
    />
  ));

  return <ul className={classes.ColorPallete}>{colorItems}</ul>;
};

export default colorPallete;
