import React, { Component } from "react";

import classes from "./App.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import ColorPallete from "../components/ColorPallete/ColorPallete";
import ToDo from "../components/ToDo/ToDo";

class App extends Component {
  state = {
    toDos: [
      { text: "React Introduction" },
      { text: "Using JSX" },
      { text: "Understanding Lifecycle" },
    ],
  };

  render() {
    return (
      <div className={classes.App}>
        <PageHeader />
        <ColorPallete />
        <ToDo toDos={this.state.toDos} />
      </div>
    );
  }
}

export default App;
