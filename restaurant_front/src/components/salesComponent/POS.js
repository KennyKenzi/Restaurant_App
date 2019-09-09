import React, { Component } from 'react';
import SalesNavBar from './SalesNavBar'
import PartnerGroupSale from './PartnerGroupSale';
import PartnerSale from './PartnerSale';
import ProductGroupSale from './ProductGroupSale';
import ProductSale  from './ProductSale';
import ProductMini from './MiniProductSale';
import PartnerMini from './MiniPartnerSale';
import SaleDisplay from './SalesDisplay/SalesDisplay';
import { arrowFunctionExpression } from '@babel/types';



class Pos extends Component {
    state = {
        selectedTab: '',
        selectedProdGroupProds: [],
        selectedCardProducts: []
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

    sendToTopGrand=(arg1)=>{
       
        
        let arrayofProductsToBeChecked =this.state.selectedCardProducts

        if(arrayofProductsToBeChecked.some(el =>el._id === arg1._id)){
           
    
            arrayofProductsToBeChecked.map((el)=>{
                if (el._id ===  arg1._id) {
               
                    el.count ++
                }
            })

        }else {
            arg1.count = 1
            arrayofProductsToBeChecked.push(arg1)

        }
      

      
        this.setState({
            selectedCardProducts: arrayofProductsToBeChecked
        })

    }



    render() { 

        let rendered
        let minrender
        switch(this.state.selectedTab){

            case 'productGroup':rendered = <ProductGroupSale selectedProds={this.selectedProds}/> ; minrender = <ProductMini selectedGroupProds={this.state.selectedProdGroupProds} handleEvent={this.sendToTopGrand}/>
            break;
            case 'product': rendered = <ProductSale/>;
            break;
            case 'partnerGroup': rendered = <PartnerGroupSale/>; minrender = <PartnerMini/>
            break;
            case 'partner': rendered= <PartnerSale/>;
            break;
            default: rendered=<ProductGroupSale selectedProds={this.selectedProds}/>; minrender = <ProductMini selectedGroupProds={this.state.selectedProdGroupProds} handleEvent={this.sendToTopGrand}/>

        }
        
       

        return ( 
            
            <div>

                     <SalesNavBar showTab={this.showTab}/>

                    <div className="container-fluid row" style={{backgroundColor:"white"}}>
                    <div className="col-12 col-sm-6 col-md-8">
                    <div className="mr-1 ml-1 mt-2"style={{backgroundColor:"rgb(230,229,229)", borderRadius:15}}>
                        
                        <SaleDisplay selectedCheckedProds={this.state.selectedCardProducts}/> 

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