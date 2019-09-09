import React, { Component } from 'react';
import AdminNavbar from './AdminNavbar'

class Users extends Component {
    state = {  }
    render() { 
        return (  
            <div>
            <div>
                <AdminNavbar active="users"/>
                <h1>USERS PROFILE PAGE</h1>
               
                    <form className= "form ">
                        <div className= "form-inline justify-content-center" >
                            <div className="form-group ">
                                <label htmlFor="inputFullName">Full Name </label>
                                    <input type="text" className="form-control" id="inputFullName" placeholder="Ful Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPhoneNumber">Phone Number </label>
                                    <input type="text" className="form-control" id="inputPhoneNumber" placeholder="Phone Number"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputUsername">Username </label>
                                    <input type="text" className="form-control" id="inputUsername" placeholder="Username"/>
                            </div>
                        </div>
                    
                    <br/>
                    <div className= "form-inline justify-content-center">
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword2">Re-enter Password</label>
                            <input type="password" className="form-control" id="inputPassword2" placeholder="Re-enter Password"/>
                    </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="activeGridCheck"/>
                        <label className="form-check-label" htmlFor="activeGridCheck">
                            Active 
                        </label>
                        </div>
                    </div>
                   
                    <button type="submit" style={{margin:10}} className="btn btn-primary">Create</button>
                    </form>

                </div>
                        
                <div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Status</th>
                            <th scope="col">-</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>John Boscoe</td>
                            <td>jboscoe</td>
                            <td>Active</td>
                            <td><button>Edit</button></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Peter Gallagher</td>
                            <td>pgallagher</td>
                            <td>Active</td>
                            <td><button>Edit</button></td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Rose Seed</td>
                            <td>rseed</td>
                            <td>Disabled</td>
                            <td><button>Edit</button></td>
                            </tr>
                        </tbody>
                        </table>

                </div>
                </div>
       
        );
    }
}
 
export default Users;