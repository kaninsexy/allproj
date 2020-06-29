import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodidList from './TodidList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const [todos, setTodos] = useState(initialTodos);
  const [todids, setTodids] = useState([]);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addTodo = (newTodoText) => {
    setTodos((prevState) => {
      return [
        ...prevState,
        { id: uuidv4(), task: newTodoText, completed: false },
      ];
    });
  };

  const removeTodo = (todoId, type, setType) => {
    const updatedTodos = type.filter((todo) => todo.id !== todoId);
    setType(updatedTodos);
  };
  // const removeTodo = (todoId, type) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== todoId);
  //   setTodos((prevState) => {
  //     return updatedTodos;
  //   });
  // };

  const toggleTodo = (todoId) => {
    setTodos((prevState) => {
      const updatedTodos = prevState.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      return updatedTodos;
    });
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleComplete = () => {
    const updatedTodos = todos.filter((todo) => todo.completed === false);
    setTodos([...updatedTodos]);
    const updatedTodids = todos.filter((todo) => todo.completed === true);
    setTodids([...todids, ...updatedTodids]);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>Todo List</Typography>
        </Toolbar>
      </AppBar>

      <Grid
        container
        justify='center'
        spacing={2}
        style={{ marginTop: '1rem' }}
      >
        <Grid item xs={3} md={4} lg={6}>
          <Typography color='inherit'>Incomplete</Typography>
          <TodoForm addTodo={addTodo}></TodoForm>
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          ></TodoList>
        </Grid>
        <Grid item xs={3} md={4} lg={6}>
          <Typography color='inherit'>Completed</Typography>
          <TodidList
            todids={todids}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          ></TodidList>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
