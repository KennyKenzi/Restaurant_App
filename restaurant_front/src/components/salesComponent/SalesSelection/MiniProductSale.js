import React, { Component } from 'react';
//import apiCalls from '../../config/apis';
// import logo from '../../logo.svg';
import MiniCards from './MinCards'


class ProductMiniSale extends Component {

    state = {
        displayedProdsFromProdGroup: [],
        selectedProdstoCheck:[],
        prodFromCard: []
      }



    

    sendToTopFromMiniProductSale=(arg1, arg3)=>{
     
 
        this.props.handleCheckoutListEvent(arg1, arg3)
    }


    render() { 
        return ( 
            <div style={{height: 280, overflow: "auto"}}>            
                <h1>Select A Product</h1>

                <div className="row m-1 clearfix">

                    {
                        this.props.selectedGroupProds.map((el)=>{
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
 
export default ProductMiniSale;