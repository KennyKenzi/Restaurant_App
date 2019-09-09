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



    // getData= async()=>{
    //     //get products from product group

        
    // }
    

    sendToTop=(arg1)=>{
 
        this.props.handleEvent(arg1)
    }

    // onClickEvent=param=>()=>{
    

    //     //getproduct from product ID
    //     apiCalls.getProductFromID(param)
    //     .then((res)=>{
    //         console.log(res.data)
    
    //     })
    // }


    render() { 
        return ( 
            <div style={{height: 280, overflow: "auto"}}>            
                <h1>Select A Product</h1>

                <div className="row m-1 clearfix">

                    {
                        this.props.selectedGroupProds.map((el)=>{
                            if(el.activeStatus){
                                return( <MiniCards key={el._id} data={el} sendToTop={this.sendToTop}/>
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