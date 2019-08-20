import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300
  },
  btn: {
    backgroundColor: '#2196f3',
    color: '#fff',
    margin: '16px'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  froms: {
    textAlign: 'center',
    transform:'translate(0%, 50%)',
    position: 'relative',
  },
  login: {
    padding: ' 30px',
    border: ' 1px solid #dadce0',
    borderRadius: '8px',
  },
  text: {
    color: ' #2196f3',
    fontSize: '25px',
    fontWeight: 500,
  },
  divAtag: {
    color: "#ffffff",
    textDecoration: "none",
  },
}));


function TextFields() {
  const classes = useStyles();
  return (
    <div>
      <form autoComplete="off" className={classes.froms}>
        <Grid container direction="row" justify="center" alignitems="center">
          <div className={classes.login}>
            <span className={classes.text}>Login</span>
            <Grid item md={6}  >
              <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
            </Grid>

            <Grid item md={6}>
              <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
            </Grid>

            <Grid item md={12} >
             <Link to="/admin-home" className={classes.divAtag}>
              <Button className={classes.btn} variant="contained" >
                Login
              </Button>
             </Link>
            </Grid>
          </div>
        </Grid>
      </form>
    </div>
  );
}

export default TextFields;