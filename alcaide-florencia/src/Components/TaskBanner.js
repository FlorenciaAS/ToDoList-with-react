//Parte superior de la aplicacion
import React from "react";

export const TaskBanner = (props) => (
  <h4 className=" bg-dark text-white text-center p-4">
    {props.userName}'s To do list (
    {props.taskItems.filter((t) => !t.done).length} task to do)
  </h4>
);
