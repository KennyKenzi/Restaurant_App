import React, { Component } from 'react';

class SalesNavBar extends Component {
    state = { 

       
     }
   

    handleClick=(e)=>{
        
        this.props.showTab(e.target.value)
        
    } 

    render() { 

        return ( 
            
            <div>
                <h1>Sale</h1>

                <ul className="nav nav-tabs justify-content-center ">
                <li className="nav-item btn-group">
                    <button className={"btn btn-light "} onClick={this.handleClick} value="productGroup">Product Group </button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-light" onClick={this.handleClick} value="product">Product</button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-light" onClick={this.handleClick} value="partnerGroup">Partner Group</button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-light" onClick={this.handleClick} value="partner">Partner</button>
                </li>
        </ul>

            </div>
            
         );
    }
}
 
export default SalesNavBar;