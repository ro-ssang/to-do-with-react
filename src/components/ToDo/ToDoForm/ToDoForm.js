import React, { Component } from "react";

import classes from "./ToDoForm.module.css";

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <form
        className={classes.ToDoForm}
        onSubmit={(event) =>
          this.props.submitted(event, this.inputRef.current, this.props.color)
        }
      >
        <input
          type="text"
          placeholder="Add your to do..."
          ref={this.inputRef}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ToDoForm;
