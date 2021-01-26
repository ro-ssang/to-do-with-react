import React, { Component } from "react";

import classes from "./App.module.css";
import PageHeader from "../components/PageHeader/PageHeader";
import ColorPallete from "../components/ColorPallete/ColorPallete";
import ToDo from "../components/ToDo/ToDo";

class App extends Component {
  state = {
    toDos: [
      { id: "toDo1", text: "React Introduction", checked: false },
      { id: "toDo2", text: "Using JSX", checked: true },
      { id: "toDo3", text: "Understanding Lifecycle", checked: false },
    ],
  };

  deleteToDoHandler = (event, id) => {
    event.stopPropagation();
    const toDos = [...this.state.toDos];
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    this.setState({ toDos: updatedToDos });
  };

  toggleToDoHandler = (id) => {
    console.log("Toggled");
    const toDos = [...this.state.toDos];
    const toDo = toDos.find((toDo) => toDo.id === id);
    toDo.checked = !toDo.checked;
    this.setState({ toDos: toDos });
  };

  submitToDoHandler = (event, inputEl) => {
    event.preventDefault();
    const newToDo = {
      id: Math.random(),
      text: inputEl.value,
      checked: false,
    };
    const toDos = [...this.state.toDos];
    toDos.push(newToDo);
    this.setState({ toDos: toDos });
    inputEl.value = "";
  };

  render() {
    return (
      <div className={classes.App}>
        <PageHeader />
        <ColorPallete />
        <ToDo
          toDos={this.state.toDos}
          removed={this.deleteToDoHandler}
          toggle={this.toggleToDoHandler}
          submitted={this.submitToDoHandler}
        />
      </div>
    );
  }
}

export default App;
