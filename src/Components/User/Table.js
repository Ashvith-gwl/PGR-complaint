import React from 'react';
import MaterialTable from 'material-table';
import LoginNav from './LoginNav'

import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom'

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'category', field: 'category' },
      { title: 'complaint', field: 'complaint' },
      { title: 'Comp ID', field: 'Status', type: 'numeric' },
      { title: 'Status',
        field: 'birthCity', lookup: { 1: 'Active', 0: 'Resolved' },
      },
    ],
    data: [
      { name: 'Name', 
        category: 'Others', 
        complaint: 'Loreum is a simple dummt text used for typewritting.Loreum is a simple dummt text used for typewritting',
        Status: 201908,
        birthCity: 1 },
      {
        name: 'Name 1',
        category: 'Others',
        complaint: 'Loreum is a simple dummt text used for typewritting.Loreum is a simple dummt text used for typewritting',
        Status: 201901,
        birthCity: 0,
      },
      {
        name: 'Name 2',
        category: 'Others',
        complaint: 'Loreum is a simple dummt text used for typewritting.Loreum is a simple dummt text used for typewritting',
        Status: 201901,
        birthCity: 0,
      },
      {
        name: 'Name 3',
        category: 'Others',
        complaint: 'Loreum is a simple dummt text used for typewritting.Loreum is a simple dummt text used for typewritting',
        Status: 201901,
        birthCity: 1,
      },
      {
        name: 'Name 2',
        category: 'Others',
        complaint: 'Loreum is a simple dummt text used for typewritting.Loreum is a simple dummt text used for typewritting',
        Status: 201901,
        birthCity: 0,
      },
      {
        name: 'Name 3',
        category: 'Others',
        complaint: 'Loreum is a simple dummt text used for typewritting.Loreum is a simple dummt text used for typewritting',
        Status: 201901,
        birthCity: 1,
      },
    ],
  });

  return (
    <div>
      <LoginNav />

      <Grid container  direction="row" justify="center" alignItems="center">
        <Grid item  md={10}>
          <h3>
            <Link to='/user-complaint' >Dashboard</Link>
            </h3> </Grid>
      </Grid>

      <Grid container
            direction="row"
            justify="center"
            alignItems="center">
        <Grid item md={8} xs={12}>
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
    </Grid>
    </Grid>
  </div>
  );
}
