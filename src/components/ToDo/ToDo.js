import React from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";

const toDo = (props) => (
  <Aux>
    <ToDoForm />
    <ToDoList toDos={props.toDos} removed={props.removed} />
  </Aux>
);

export default toDo;
