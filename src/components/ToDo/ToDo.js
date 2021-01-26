import React from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";

const toDo = (props) => (
  <Aux>
    <ToDoForm submitted={props.submitted} />
    <ToDoList
      toDos={props.toDos}
      removed={props.removed}
      toggle={props.toggle}
    />
  </Aux>
);

export default toDo;
