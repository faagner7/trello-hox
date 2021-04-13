import React from 'react';
import { Typography, makeStyles, AppBar } from '@material-ui/core';
import logo from '../../assets/images/logo-hox.png';

const styles = () => ({
  appBar: {
    backgroundColor: '#000',
    padding: '8px, 0px, 4px, 16px',
  },
  logo: {
    width: 35,
    height: 35,
    marginTop: 5,
    marginRight: 10,
  },
  title: {
    fontWeight: 200,
    letterSpacing: 5,
  },
});

const useStyles = makeStyles(styles);

function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position='absolute' className={classes.appBar}>
        <Typography className={classes.title} variant='h5'>
          <img className={classes.logo} src={logo} alt='logo-hox' />
          Trello - HOX
        </Typography>
      </AppBar>
    </>
  );
}

export default Header;
