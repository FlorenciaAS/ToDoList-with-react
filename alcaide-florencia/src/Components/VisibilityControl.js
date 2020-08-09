//Demostrar las tareas que ya fueron completadas o no
import React from 'react';

export const VisibilityControl= props =>{
    return(
        <div className='from-chek'>
            <input type='checkbox' className='from-check-input' 
            checked={props.isChecked} onChange={e=> props.callback(e.target.checked)} />

            <label htmlFor='form-checked-label'>
                show {props.description}
            </label>
        </div>
    )
}