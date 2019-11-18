import React, { Component } from 'react';
import MiniCards from './SalesSelection/MinCards';
import apiCalls from './../../config/apis'


class ProductSale extends Component {
    state = { 

        allProds: []
     }

     componentDidMount=()=>{

        apiCalls.getAllProducts()
        .then((res)=>{
           
            this.setState({
                allProds: res.data
            })
            console.log(this.props)
        })

     }


     sendToTopFromMiniProductSale=(arg1, arg3)=>{
     
 
        this.props.handleCheckoutListEvent(arg1, arg3)
    }


    render() { 
        return ( 
            <div style={{height: 580, overflow: "auto"}}>
                
               
                <div className="row m-1 clearfix">

                    {
                        this.state.allProds.map((el)=>{
                            if(el.activeStatus){
                                return( <MiniCards key={el._id} data={el} sendToTopFromMiniCards={this.sendToTopFromMiniProductSale}/>
                            )
                            
                             }else{
                                return ""
                            }
                    })
                    }
                </div>

            </div>
         );
    }
}
 
export default ProductSale;