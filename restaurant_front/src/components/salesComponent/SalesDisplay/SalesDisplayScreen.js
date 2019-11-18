import React, { Component } from 'react';
import SalesList from './SalesDisplayListItem'
//import Popup from '../../Popup';
//import Popup from '../../Popup';
//import Popup from 'reactjs-popup'


class SalesScreen extends Component {
    state = { 
        
    }
    componentDidMount=()=>{
      //  console.log(this.props)
    }


    // sendToTop=(arg1, arg2)=>{

    //     this.props.sendToTop(arg1, arg2)

    // }

 

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
                                            <SalesList listItems={el} index={index} key={el._id} sendToTopFromDisplayList={this.props.sendToTop} sendTotal = {this.props.sendTotal}/>
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