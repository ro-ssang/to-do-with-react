import React, { Component } from "react";

import classes from "./App.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import ColorPallete from "../components/ColorPallete/ColorPallete";
import ToDo from "../components/ToDo/ToDo";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <PageHeader />
        <ColorPallete />
        <ToDo />
      </div>
    );
  }
}

export default App;
