import React from 'react';
import { makeStyles, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import Header from './components/Header';
import TaskList from './components/TaskList';

import { store } from './store';

const styles = (theme) => ({
  root: {
    widht: 800,
    padding: 24,
    margin: '0px auto',
  },
});

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();

  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <div className={classes.root}>
          <Header />
          <TaskList />
        </div>
      </Provider>
    </>
  );
}

export default App;
