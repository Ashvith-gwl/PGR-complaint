import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
<<<<<<< HEAD
  nav:{
    backgroundColor: '#2196f3',
=======
  nav: {
    backgroundColor: '#2196f3',
  },
  alink:{
    color:'#fff',
    textDecoration:'none',
>>>>>>> 452b41c12513dd14ada334f86ee4f09969553eb0
  }
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.nav}>
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            App-Name
          </Typography>
          <Link to='/admin-home' >
            <Button className={classes.alink}>Home</Button>
          </Link>
          <Link to='/admin-home/info' >
            <Button className={classes.alink}>Dashboard</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
