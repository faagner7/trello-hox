import React from "react";
import { makeStyles, CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import { store, persistor } from "./store";

const styles = theme => ({
  root: {
    widht: 800,
    padding: theme.spacing(2),
    margin: "0px auto"
  }
  // appBar: {
  //   backgroundColor: "#929191",
  //   padding: theme.spacing(0.5)
  // },
  // logo: {
  //   width: 35,
  //   height: 35,
  //   marginTop: 5,
  //   marginRight: 10
  // }
});

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <div className={classes.root}>
            <Header />
            <TaskList />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
