import React, { Component } from 'react';
import Navbar from './AdminNav'
import Form from './AdminForm'
// import Table from './AdminTable'

class AdminHome extends Component {
    render() {
       
        return (
            <div>
                <Navbar />
                <Form />
                {/* <Table /> */}
            </div>
        );
    }
}

export default AdminHome;