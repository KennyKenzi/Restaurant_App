import React, { Component } from 'react';
import logo from '../logo.svg'



class Home extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <h1>Home Page</h1>
                <h2 style={{color: 'red'}}>Under Construction...</h2>
                <img src={logo} width="600" height="600" alt="" style={{animation: 'rotation 10s infinite linear'}}></img>
               
            </div>
            

        );
    }
}
 
export default Home;