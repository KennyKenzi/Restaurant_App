import React, { Component } from 'react';
import SalesScreen from './SalesDisplayScreen';
import SalesButton from './salesDisplayButtons'

class SalesDisplay extends Component {
    state = { 

     }
    render() { 
        console.log('change')

        return ( 
        
        <div  style={{height: 590}}>
            <h1>TOTAL: 
                <input type="Number"></input>
            </h1> 
            <div>
             <SalesScreen selectedCheckedProds={this.props.selectedCheckedProds}/>   
            </div>
            
            <div>
              <SalesButton/>  
            </div>


            

        </div>
        ) 
        
    }
}
 
export default SalesDisplay;