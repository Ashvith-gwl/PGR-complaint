import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

import { FormErrors } from '../FormErrors';


const styles = theme => ({
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
    margin: '16px',
    padding: '0px'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  froms: {
    textAlign: 'center',
    transform: 'translate(0%, 50%)',
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
    padding: '10px 30px'
  },
});


class TextFields extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 4;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <form autoComplete="off" className={classes.froms}>
          <Grid container direction="row" justify="center" alignitems="center">
            <div className={classes.login}>
              <span className={classes.text}>Login</span>
              <FormErrors formErrors={this.state.formErrors} />

              <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
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
                    value={this.state.email}
                    onChange={this.handleUserInput}
                  />

                </Grid>
              </div>

              <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                <Grid item md={6}>
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleUserInput}
                  />
                </Grid>
              </div>

              <Grid item md={12} >

                <Button className={classes.btn} variant="contained" disabled={!this.state.formValid}>
                  <Link to="/admin-home" className={classes.divAtag}>Login
                  </Link>
                </Button>

              </Grid>
            </div>
          </Grid>
        </form>

      </div>
    );
  }
}


TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);