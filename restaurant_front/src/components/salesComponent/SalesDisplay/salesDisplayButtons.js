import React, { Component } from 'react';

class SalesButtons extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{height: 155, backgroundColor:"white", borderRadius:15, margin:15}}>

                <div className="row" style={{overflow: 'auto', margin:1}}>
                    <button className="col-3 btn btn-primary" style={{margin:1}}>-</button>
                    <button className="col-3 btn btn-primary" style={{margin:1}}>+</button>
                    <button className="col-3 btn btn-danger" style={{margin:1}}>Clear/Delete</button>
                    <button className="col btn btn-warning" style={{margin:1}}>Discount</button>   
                    <button className="col-3 btn btn-primary" style={{margin:1}}>Button</button>
                    <button className="col-3 btn btn-primary" style={{margin:1}}>Button</button>
                    <button className="col-3 btn btn-primary" style={{margin:1}}>Button</button>
                    <button className="col btn btn-primary" style={{margin:1}}>Button</button>  
                    
                    <button className="col-6 btn btn-success" style={{margin:1, marginLeft:"auto", marginRight:"auto"}}>Checkout</button>            
                </div>
            </div>
         );
    }
}
 
export default SalesButtons;