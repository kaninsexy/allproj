import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import useInputState from '../todo/useInputState';
import { TextField } from '@material-ui/core';
function Counter() {
  const [count, setCount] = useState(0);
  //   const [plus, setPlus] = useState(0);
  //   const [minus, setMinus] = useState(0);
  //   const [redo, setRedo] = useState(0);
  const [value, handleChange, reset] = useInputState('');
  const [value2, handleChange2, reset2] = useInputState('');
  const [value3, handleChange3, reset3] = useInputState('');
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={3}
    >
      <h1>{count}</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          setCount(count + Number(value));
          //   console.log(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Put Plus Number'
          fullWidth
        ></TextField>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          setCount(count - Number(value2));
          reset2();
        }}
      >
        <TextField
          value={value2}
          onChange={handleChange2}
          margin='normal'
          label='Put Subtract Number'
          fullWidth
        ></TextField>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          //   setRedo(Number(value));
          setCount(Number(value3));
          reset3('');
        }}
      >
        <TextField
          value={value3}
          onChange={handleChange3}
          margin='normal'
          label='Put Reset Number'
          fullWidth
        ></TextField>
      </form>
    </Paper>
  );
}
export default Counter;
