import React, { Component } from "react";

import classes from "./App.module.css";
import PageHeader from "../components/pageHeader/pageHeader";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <PageHeader />
        <div>colorPallete</div>
        <div>toDo</div>
      </div>
    );
  }
}

export default App;
