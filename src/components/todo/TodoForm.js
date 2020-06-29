import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './useInputState';

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
        style={{ marginLeft: '1rem', width: '90%' }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo List'
          fullWidth
          autoFocus
        ></TextField>
      </form>
    </Paper>
  );
}

export default TodoForm;
