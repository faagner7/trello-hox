import React from "react";
import PropTypes from "prop-types";

import {
  ListItem,
  ListItemText,
  IconButton,
  makeStyles
} from "@material-ui/core";
// import DoneIcon from "@material-ui/icons/Done";
import NextIcon from "@material-ui/icons/ArrowForward";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#d9d9d9",
    borderRadius: 12,
    marginBottom: 2
  },
  wordWrap: {
    wordWrap: "break-word"
  }
});

function TodoList({ text, onDoing, onRemove }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ListItem>
        <ListItemText className={classes.wordWrap}>{text}</ListItemText>
        <IconButton onClick={onDoing}>
          <NextIcon />
        </IconButton>
        <IconButton onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </div>
  );
}

TodoList.propTypes = {
  text: PropTypes.string,
  onDoing: PropTypes.func,
  onRemove: PropTypes.func
};

TodoList.defaultProps = {
  onDoing: () => {},
  onRemove: () => {},
  text: "task"
};

export default TodoList;
