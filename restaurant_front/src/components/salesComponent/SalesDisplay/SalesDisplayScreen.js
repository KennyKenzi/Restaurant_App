import React, { Component } from 'react';
import SalesList from './SalesDisplayListItem'

class SalesScreen extends Component {
    state = { }


    render() { 
        return ( 
            <div style={{height: 345, backgroundColor:"white", borderRadius:15, margin:15, overflow: "auto"}}>
                <h3>CHECKOUT</h3>
           
                <div>


                    <table className="table table-borderless">
                        <thead>
                            <tr>
                            <th scope="col" style={{ width: "10%"}}>#</th>
                            <th scope="col" style={{ width: "50%"}}>Item</th>
                            <th scope="col" style={{ width: "10%"}}>Quantity</th>
                            <th scope="col" style={{ width: "10%"}}>Rate</th>
                            <th scope="col" style={{ width: "20%"}}>Price</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                        this.props.selectedCheckedProds.map((el, index)=>{
                            if(el){
                                return (
                                   <SalesList listItems={el} index={index} key={el._id}/>
                                )
                            } else{
                                return ""
                            }
                           

                        })


                    }
                    
                           
                            
                        </tbody>
                    </table>
                    <hr/>
                </div>


            </div>
         );
    }
}
 
export default SalesScreen;