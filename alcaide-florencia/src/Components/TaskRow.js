//Filas de las tablas para mostrar los datos- devolver tr
import React from 'react';

export const TaskRow= (props)=> {
    return(
      <tr key={props.task.name}>
        <td>
          {props.task.name}
        </td>
        <td>
            <input type='checkbox' 
            checked={props.task.done} 
            onChange={() => props.toggleTask(props.task)} />
        
        </td>
      </tr>
    )
}
