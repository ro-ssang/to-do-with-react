import React, { Component } from "react";

import classes from "./App.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import ColorPallete from "../components/ColorPallete/ColorPallete";
import ToDo from "../components/ToDo/ToDo";

class App extends Component {
  state = {
    toDos: [
      { id: "toDo1", text: "React Introduction" },
      { id: "toDo2", text: "Using JSX" },
      { id: "toDo3", text: "Understanding Lifecycle" },
    ],
  };

  deleteToDoHandler = (id) => {
    const toDos = this.state.toDos;
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    this.setState({ toDos: updatedToDos });
  };

  render() {
    return (
      <div className={classes.App}>
        <PageHeader />
        <ColorPallete />
        <ToDo toDos={this.state.toDos} removed={this.deleteToDoHandler} />
      </div>
    );
  }
}

export default App;
