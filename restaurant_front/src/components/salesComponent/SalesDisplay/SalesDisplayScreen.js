import React, { Component } from 'react';

class SalesScreen extends Component {
    state = {  }

 


    render() { 
        return ( 
            <div style={{height: 345, backgroundColor:"white", borderRadius:15, margin:15, overflow: "auto"}}>
                <h3>CHECK</h3>
           
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
                            if(this.props.selectedCheckedProds){
                                return (
                                    <tr key={el._id}>
                                    <th scope="row" style={{padding: 0}}>{index + 1}</th>
                                    <td style={{padding: 0}}>{el.name}</td>
                                    <td style={{padding: 0}}>{el.count}</td>
                                    <td style={{padding: 0}}>{el.price}</td>
                                    <td style={{padding: 0}}>{el.price * el.count}</td>
                                    </tr>
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