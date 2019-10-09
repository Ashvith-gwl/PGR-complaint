import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LoginNav from './AdminNav'

import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  divAtag: {
    color: "#2196f3",
    textDecoration: "none",
  },
  add: {
    color: '#2196f3',
    float: 'right'
  },
  btn: {
    backgroundColor: '#2196f3',
    color: '#fff',
    margin: '16px',
    padding: '0px'
  }
};


class SimpleTable extends Component {


  render() {
    const {classes, posts=[] } = this.props;

    return (
      <div>
        <LoginNav />

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={10}>
            <h3>
              <Link to='/admin-home' className={classes.divAtag}>Register Complaint</Link>
            </h3> </Grid>
        </Grid>

        <Grid container
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item md={8} xs={12}>
            <Paper className={classes.root}>
              <Link to='/admin-home' >
                <Button className={classes.add}>
                  <i className="material-icons">add</i>
                </Button>
              </Link>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell >Emp ID</TableCell>
                {/*   <TableCell >Comp ID</TableCell>
                  <TableCell >Status</TableCell> */}
                    <TableCell >Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts.map((row, id) => (
                    <TableRow key={id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.emailid}</TableCell>
                      <TableCell>{row.department}</TableCell>
                      <TableCell >{row.complaint}</TableCell>
                     {/*   <TableCell >{row.compID}</TableCell>
                      <TableCell >{row.status}</TableCell> */}
                      <TableCell >
                        <Button variant="contained" className={classes.btn}
                          onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: row.id})}>
                          Delete
                        </Button>
                      </TableCell>
                  </TableRow>
                  ))
                  }
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
    {/* {console.log(this.props.posts)} */}
    {/* {this.props.posts.map((post) => <h4>{post.name}</h4>)} */}
      </div>
    );
  }
}


const mapStateToProps = ({admin}) => {
  return {
    posts: admin
  }
}


export default connect(mapStateToProps)(withStyles(styles)(SimpleTable));