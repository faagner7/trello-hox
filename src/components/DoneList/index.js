import React from "react";
import PropTypes from "prop-types";

import {
  ListItem,
  ListItemText,
  IconButton,
  makeStyles
} from "@material-ui/core";
import BackIcon from "@material-ui/icons/ArrowBack";
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

function DoneList({ text, onRemove, onDoing }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem>
        <ListItemText className={classes.wordWrap}>{text}</ListItemText>
        <IconButton onClick={onDoing}>
          <BackIcon />
        </IconButton>
        <IconButton onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </div>
  );
}

DoneList.propTypes = {
  text: PropTypes.string,
  onRemove: PropTypes.func,
  onDoing: PropTypes.func
};

DoneList.defaultProps = {
  text: "",
  onRemove: () => {},
  onDoing: () => {}
};

export default DoneList;
