import React, { useState } from "react";
import { TaskRow } from "./Components/TaskRow";
import { TaskBanner } from "./Components/TaskBanner";
import { TaskCreator } from "./Components/TaskCreator";
//import './App.css';

function App() {
  //definimos estados-nombre y funcion
  const [userName, setUserName] = useState("Florencia");

  const [taskItems, setTaksItems] = useState([
    { name: "First task", done: false },
    { name: "Second task", done: true },
    { name: "Third task", done: false },
    { name: "Fourth task", done: false },
  ]);

  //para cambiar de true a false
  const toggleTask = (task) =>
    setTaksItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRow = () => {
    return taskItems.map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ));
  };

  return (
    <div className="App">
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator />

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>{taskTableRow()}</tbody>
      </table>
    </div>
  );
}

export default App;
