import React from 'react';
import { Button, TextField } from '@material-ui/core';


const NewTodoForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>
            <label htmlFor="newTodo">New Todo</label>
            <TextField variant="outlined" onChange={props.newTodoChanged}  id="newTodo" name="newTodo" value={props.newTodo}/>
            <Button variant="contained"  color="primary" type="submit">Add Todo</Button>
        </form>
    );
}

export default NewTodoForm;