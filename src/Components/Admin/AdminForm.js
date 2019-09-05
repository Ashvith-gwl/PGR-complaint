import React, { Component } from 'react';
// import { TextField, Grid, makeStyles, FormControl,Button, InputLabel,Select, MenuItem } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import uuidv1 from "uuid"


const styles = theme => ({
  textField: {
    width: '300px',
  },
  labelitem: {
    margin: ' 30px 40px'
  },
  slecetCat: {
    marginTop: '13px',
  },
  btnn: {
    margin: '21px',
    width: '12%',
    padding: '10px',
    background: "#2196f3",
    color:'#fff'
  },
  frm: {
    textAlign: 'center',
  }
});

class Comform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emailid:'',
      department:'',
      complaint:''
    }
  }
  

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

submitForm = (e) => {
    e.preventDefault();
    const v1options = {
      node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
      clockseq: 0x1234,
      msecs: new Date('2011-11-01').getTime(),
      nsecs: 5678
    };
    let data = {
      // id: Math.floor(Math.random() * 100),
      id: uuidv1(v1options),
      name: this.state.name,
      emailid: this.state.emailid,
      department: this.state.department,
      complaint: this.state.complaint
    }
    
    // console.log(data)
    this.props.dispatch({
      type:'ADD_POST',
    data});
    // this.data.id ='';
    // this.state.name = '';
  }


  render() {
    const { classes } = this.props;
    const {name,emailid,department,complaint} = this.state;
    return (
      <div>
        <form className={classes.frm} onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-email-input"
            label="name"
            className={classes.textField}
            name="name"
            value={name}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            label="email"
            className={classes.textField}
            name="emailid"
            value={emailid}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            id="outlined-email-input"
            label="department"
            className={classes.textField}
            name="department"
            value={department}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            label="emp id"
            className={classes.textField}
            name="complaint"
            value={complaint}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
          />
          <br /> <br />
          <Button onClick={this.submitForm} variant="contained" className={classes.btnn} >
            Submit
          </Button>
        </form>

      </div>
    );
  }
}


Comform.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Comform));