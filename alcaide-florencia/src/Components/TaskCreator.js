//Definir un formulario para guardar tareas en el estado de la aplicacion
import React, {useState} from'react';

export const TaskCreator= props =>  {

    const[newTaskName,setNewTaskName]= useState('');
    const updateNewTaskValue= e => setNewTaskName(e.target.value);
    const createNewTask=() => {
        console.log(newTaskName);
        setNewTaskName('');
    }

    return(
        <div className='my-1'>
            <input type='text'
            className='form-control'
            value={newTaskName}
            oneChange={updateNewTaskValue} />

            <button className='btn btn-primary mt-1' oneClick={createNewTask}>
                Add
            </button>
        </div>
    )
}