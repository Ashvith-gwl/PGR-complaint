import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import HomePage from './Components/Header'
import Table from './Components/User/Table'
import Complaint from './Components/AnonymousComp/Complaint'
// import ControlledOpenSelect from './Components/Table'
import Login from './Components/Login'
import UserComplaint from './Components/User/Comform'
import AdminLogin from './Components/Admin/AdminLogin'
import AdminHome from './Components/Admin/AdminHome'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Route path="/user-home" component={Table}/>
      <Route path="/complaint" component={Complaint}/>
      <Route path="/user-complaint" component={UserComplaint}/>
      <Route path="/login" component={Login}/>
      <Route path="/admin-login" component={AdminLogin}/>
      <Route path="/admin-home" component={AdminHome}/>
      </div>
     </BrowserRouter>
  );
}

export default App;
