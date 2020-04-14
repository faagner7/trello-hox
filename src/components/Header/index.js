import React from "react";
import { Typography, makeStyles, AppBar } from "@material-ui/core";
import logo from "../../assets/images/logo-hox.png";

const styles = theme => ({
  appBar: {
    backgroundColor: "#000",
    padding: theme.spacing(1, 0, 0.5, 2)
  },
  logo: {
    width: 35,
    height: 35,
    marginTop: 5,
    marginRight: 10
  },
  title: {
    fontWeight: 200,
    letterSpacing: 5
  }
});

const useStyles = makeStyles(styles);

function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="absolute" className={classes.appBar}>
        <Typography className={classes.title} variant="h5">
          <img className={classes.logo} src={logo} alt="logo-hox" />
          Trello - HOX
        </Typography>
      </AppBar>
    </>
  );
}

export default Header;
