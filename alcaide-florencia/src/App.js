import React, { useState, useEffect } from "react";
import { TaskRow } from "./Components/TaskRow";
import { TaskBanner } from "./Components/TaskBanner";
import { TaskCreator } from "./Components/TaskCreator";
import {VisibilityControl} from "./Components/VisibilityControl"
//import './App.css';

function App() {
  //definimos estados-nombre y funcion
  const [userName, setUserName] = useState("Florencia");

  const [taskItems, setTaksItems] = useState([
    { name: "First task", done: false },
  ]);

  const[showCompleted, setShowCompleted ] =useState(true);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
        setTaksItems(JSON.parse(data))
    } else {
          setUserName("Florencia Example");
          setTaksItems([
            { name: "First task Examp", done: false },
          ]);
          setShowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask= taskName => {
    if(!taskItems.find(t => t.name === taskName)){
      setTaksItems([...taskItems, {name: taskName, done:false}])
    }
  }

  const toggleTask = (task) =>
    setTaksItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRow = (doneValue) => 
     taskItems
    .filter(task => task.done === doneValue)
    .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ))
      


  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator callback={createNewTask} />

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>{taskTableRow(false)}</tbody>
      </table>

      <div className='bg-secondary-text-white text-center p-2'>
        <VisibilityControl description='Completed task'
          isChecked={showCompleted}
          callback={checked => setShowCompleted(checked)} />
      </div>

     {showCompleted && (
       <table className='table table-striped table-bordered'>

        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>
          {taskTableRow(true)}
        </tbody>
       </table>
     )
     } 

    </div>
  );
}

export default App;
