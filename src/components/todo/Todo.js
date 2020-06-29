import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';

import {
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './useToggleState';
import EditTodoForm from './EditTodoForm';
function Todo(props) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          editTodo={props.editTodo}
          task={props.task}
          id={props.id}
          toggleEditForm={toggle}
        ></EditTodoForm>
      ) : (
        <>
          <Checkbox
            color='secondary'
            tabIndex={-1}
            checked={props.completed}
            onClick={() => {
              props.toggleTodo(props.id);
            }}
          ></Checkbox>
          <ListItemText
            style={{
              textDecoration: props.completed ? 'line-through' : 'none',
            }}
          >
            {props.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton>
              {props.completed ? (
                <DoneIcon
                  aria-label='Done'
                  onClick={() => props.toggleComplete()}
                ></DoneIcon>
              ) : null}
            </IconButton>
            <IconButton>
              <DeleteIcon
                aria-label='Delete'
                onClick={() => {
                  props.removeTodo(props.id);
                }}
              ></DeleteIcon>
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon></EditIcon>
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
export default Todo;
