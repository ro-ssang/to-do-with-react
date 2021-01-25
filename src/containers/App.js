import React, { Component } from "react";

import classes from "./App.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import ColorPallete from "../components/ColorPallete/ColorPallete";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <PageHeader />
        <ColorPallete />
        <div>toDo</div>
      </div>
    );
  }
}

export default App;
