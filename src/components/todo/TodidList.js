import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import Todid from './Todid';
function TodoList(props) {
  if (props.todids.length)
    return (
      <Paper>
        <List>
          {props.todids.map((todids, index) => (
            <>
              <Todid
                id={todids.id}
                task={todids.task}
                key={todids.id}
                completed={todids.completed}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
              />
              {index < props.todids.length - 1 && <Divider></Divider>}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;
