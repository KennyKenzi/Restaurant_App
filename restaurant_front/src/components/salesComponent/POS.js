import React, { Component } from 'react';
import SalesNavBar from './SalesNavBar'
import PartnerGroupSale from './PartnerGroupSale';
import PartnerSale from './PartnerSale';
import ProductGroupSale from '../salesComponent/SalesSelection/ProductGroupSale';
import ProductSale  from './ProductSale';
import ProductMini from '../salesComponent/SalesSelection/MiniProductSale';
import PartnerMini from './MiniPartnerSale';
import SaleDisplay from './SalesDisplay/SalesDisplay';
import apiCalls from '../../config/apis'
//import { arrowFunctionExpression } from '@babel/types';



class Pos extends Component {
    state = {
        selectedTab: '',
        selectedProdGroupProds: [],
        selectedCardProducts: [],
        totalSale: ''
      }




    showTab=(selected)=>{
        
            this.setState({
                selectedTab: selected
            })
    }
    
    selectedProds=(selectedProdGroupProds)=>{
        
           
            this.setState({
            selectedProdGroupProds: selectedProdGroupProds
            
        })
    }

    counterFromBottom=async(arg1, sign)=>{

    
        await apiCalls.getProductFromID(arg1)
        .then((res)=>{

            this.setState({
                selectedCard: res.data
            })
        })
        
        let arrayofProductsToBeChecked =this.state.selectedCardProducts
        let arg2 = this.state.selectedCard

        if(arrayofProductsToBeChecked.some(el =>el._id === arg2._id)){  
    
            arrayofProductsToBeChecked.map((el)=>{
                if (el._id ===  arg2._id) {
                    if(sign === 'plus'){
                         el.count ++
                    }else{
                        el.count --
                    }
                   
                   el.cost = el.count * el.price
                }
                else{
                    
                }
            })          
        }else {

            arg2.count = 1
            arg2.cost = arg2.count * arg2.price
            arrayofProductsToBeChecked.push(arg2)
        }
      
        this.setState({
            selectedCardProducts: arrayofProductsToBeChecked
        })   

        this.calculateTotal()
    }

    calculateTotal=()=>{

        // this.props.selectedCheckedProds
        var total = 0
        this.state.selectedCardProducts.forEach(el => {
            total = total + el.cost
        });

        this.setState({
            totalSale : total
        })
        
     }


    render() { 

        let rendered
        let minrender
        switch(this.state.selectedTab){

            case 'productGroup':rendered = <ProductGroupSale selectedProds={this.selectedProds}/> ; minrender = <ProductMini selectedGroupProds={this.state.selectedProdGroupProds} handleCheckoutListEvent={this.counterFromBottom}/>
            break;
            case 'product': rendered = <ProductSale/>;
            break;
            case 'partnerGroup': rendered = <PartnerGroupSale/>; minrender = <PartnerMini/>
            break;
            case 'partner': rendered= <PartnerSale/>;
            break;
            default: rendered=<ProductGroupSale selectedProds={this.selectedProds}/>; minrender = <ProductMini selectedGroupProds={this.state.selectedProdGroupProds} handleCheckoutListEvent={this.counterFromBottom}/>

        }
        
       

        return ( 
            
            <div>

                     <SalesNavBar showTab={this.showTab}/>

                    <div className="container-fluid row" style={{backgroundColor:"white"}}>
                    <div className="col-12 col-sm-6 col-md-8">
                    <div className="mr-1 ml-1 mt-2"style={{backgroundColor:"rgb(230,229,229)", borderRadius:15}}>
                        
                        <SaleDisplay selectedCheckedProds={this.state.selectedCardProducts} totalSale={this.state.totalSale} handlePlusMinusEvent={this.counterFromBottom}/> 

                    </div>
                    </div>

                    <div className="col-sm-6 col-md-4" >     
                        <div className="mr-1 ml-1 mt-2"style={{backgroundColor:"rgb(230,229,229)" , borderRadius:15}}>
                            {rendered}
                        </div>
                        <div className="mr-1 ml-1 mt-2"style={{backgroundColor:"rgb(230,229,229)" , borderRadius:15}}>  
                            {minrender}
                        </div>
                    </div>

                </div>

            </div>
            


            
         );
    }
}
 
export default Pos;