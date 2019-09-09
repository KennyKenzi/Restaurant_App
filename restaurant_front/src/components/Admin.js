import React, { Component } from 'react';
import AdminNavbar from './AdminNavbar'
import logo from '../logo.svg'

//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Admin extends Component {
    
    state = {  }
    render() { 
        return (  
           
           
                <div>
                        <AdminNavbar/>
                        <h1>MAIN ADMIN PAGE</h1>
                        <h2 style={{color: 'red'}}>Under Construction...</h2>
                        <img src={logo} width="500" height="500" alt="" style={{animation: 'rotation 10s infinite linear', marginTop: '10'}}></img>
                </div>
           
        );
    }
}
 
export default Admin;