import React, { Component } from 'react';
import SalesScreen from './SalesDisplayScreen';
import SalesButton from './salesDisplayButtons'

class SalesDisplay extends Component {
    state = { 
        
     }




    render() { 
        return ( 
        
        <div  style={{height: 590}}>
            <div >
                <label htmlFor="totalInput">TOTAL</label>
                <input id="totalInput" type="text" disabled className="form-control" style={{width: 150, marginRight: "auto", marginLeft: "auto"}} value={this.props.totalSale}></input>
            </div>
                 
            
            <div>
             <SalesScreen selectedCheckedProds={this.props.selectedCheckedProds}/>   
            </div>
            
            <div>
              <SalesButton totalSale={this.props.totalSale}/>  
            </div>


            

        </div>
        ) 
        
    }
}
 
export default SalesDisplay;