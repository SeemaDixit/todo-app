import React from 'react';
import { Button } from '@material-ui/core';


const TodoItem = (props) => {
    const {todo, index } = props;
return (
    <li key={todo.title}>
        <input type="checkbox"  onChange={(event) => props.toggleTodoDone(event, index)} checked={todo.done} />
        <span className={todo.done ? 'done' : ''}>{todo.title}</span>
        <Button variant="contained" color="secondary" onClick={()=> props.removeTodo(index)}>Remove</Button>
    </li>
);

}

export default TodoItem;