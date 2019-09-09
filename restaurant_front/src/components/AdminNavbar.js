import React, { Component } from 'react';

class Admin_Nav extends Component {
    state = {  }
    // navStyle = {
    //     return
    // }
    render() { 
        return ( 
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                    <a className={ this.props.active === 'productGroup' ? 'nav-link active' : 'nav-link'} href="/productgroup">Product Group</a>
                </li>
                <li className="nav-item">
                    <a className={ this.props.active === 'product' ? 'nav-link active' : 'nav-link'} href="/products">Products</a>
                </li>
                <li className="nav-item">
                    <a className={ this.props.active === 'users' ? 'nav-link active' : 'nav-link'} href="/users">Users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/admin">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/admin">Disabled</a>
                </li>
        </ul>
         );
    }
}
 
export default Admin_Nav;