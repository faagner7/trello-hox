import React, { useState } from 'react';
import {
  List,
  makeStyles,
  Card,
  Grid,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';

import {
  addTodo,
  removeTodo,
  addDone,
  removeDone,
  addDoing,
  removeDoing,
} from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';

import TodoList from '../TodoList';
import DoneList from '../DoneList';
import DoingList from '../DoingList';

import styles from './styles';

const todoSelector = ({ task }) => task.todo;
const doneSelector = ({ task }) => task.done;
const doingSelector = ({ task }) => task.doing;

const useStyles = makeStyles(styles);

function TaskList() {
  const [text = '', setText] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();

  const todos = useSelector(todoSelector);
  const dones = useSelector(doneSelector);
  const doings = useSelector(doingSelector);

  function handleAddTodo(text) {
    dispatch(addTodo({ text }));
  }

  function handleRemoveTodo(index) {
    dispatch(removeTodo(index));
  }

  function handleRemoveDone(index) {
    dispatch(removeDone(index));
  }

  function handleAddDoing(text) {
    dispatch(addDoing({ text }));
  }

  function handleRemoveDoing(index) {
    dispatch(removeDoing(index));
  }

  function handleAddDone(text) {
    dispatch(addDone({ text }));
  }

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={4}>
        <Card className={classes.card}>
          {/* CARD TODO */}
          <Typography className={classes.title} variant='subtitle1'>
            Todo
          </Typography>
          <List className={classes.list}>
            {todos.map((todo, ind) => (
              <TodoList
                variant='doneIcon'
                key={todo.text}
                text={todo.text}
                onDoing={() => {
                  handleAddDoing(todo.text);
                  handleRemoveTodo(ind);
                }}
                onRemove={() => handleRemoveTodo(ind)}
              />
            ))}
          </List>
          {/* INPUT DE TASKS */}
          <TextField
            className={classes.input}
            value={text}
            onChange={(e) => setText(e.target.value)}
            variant='outlined'
            size='small'
            placeholder='Insert your task here'
            multiline
            autoFocus
          />
          <Button
            className={classes.button}
            size='large'
            onClick={() => {
              handleAddTodo(text);
              setText('');
            }}
            disabled={text === ''}
            fullWidth
          >
            <AddIcon />
            <Typography className={classes.addTask} variant='subtitle1'>
              Add task
            </Typography>
          </Button>
        </Card>
      </Grid>
      {/* CARD DOING */}
      <Grid item xs={4}>
        <Card className={classes.card}>
          <Typography className={classes.title} variant='subtitle1'>
            Doing
          </Typography>
          <List className={classes.list}>
            {doings.map((doing, ind) => (
              <DoingList
                key={doing.text}
                text={doing.text}
                onRemove={() => handleRemoveDoing(ind)}
                onTodo={() => {
                  handleAddTodo(doing.text);
                  handleRemoveDoing(ind);
                }}
                onDone={() => {
                  handleAddDone(doing.text);
                  handleRemoveDoing(ind);
                }}
              />
            ))}
          </List>
        </Card>
      </Grid>
      {/* CARD DONE */}
      <Grid item xs={4}>
        <Card className={classes.card}>
          <Typography className={classes.title} variant='subtitle1'>
            Done
          </Typography>
          <List className={classes.list}>
            {dones.map((done, ind) => (
              <DoneList
                key={done.text}
                text={done.text}
                onRemove={() => handleRemoveDone(ind)}
                onDoing={() => {
                  handleAddDoing(done.text);
                  handleRemoveDone(ind);
                }}
              />
            ))}
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TaskList;
