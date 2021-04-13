import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem,
  ListItemText,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import BackIcon from '@material-ui/icons/ArrowBack';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#d9d9d9',
    borderRadius: 12,
    marginBottom: 2,
  },
  wordWrap: {
    wordWrap: 'break-word',
  },
});

function DoingList({ text, onRemove, onTodo, onDone }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem>
        <ListItemText className={classes.wordWrap}>{text}</ListItemText>
        <IconButton onClick={onTodo}>
          <BackIcon />
        </IconButton>
        <IconButton onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={onDone}>
          <DoneIcon />
        </IconButton>
      </ListItem>
    </div>
  );
}

DoingList.propTypes = {
  text: PropTypes.string,
  onRemove: PropTypes.func,
  onTodo: PropTypes.func,
  onDone: PropTypes.func,
};

DoingList.defaultProps = {
  text: '',
  onRemove: () => {},
  onTodo: () => {},
  onDone: () => {},
};

export default DoingList;
