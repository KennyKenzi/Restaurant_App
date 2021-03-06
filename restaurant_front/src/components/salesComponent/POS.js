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
        totalSale: '',
        
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
         // console.log(arg1)
            this.setState({
                
                selectedCard: res.data
            })
        })
        
        let arrayofProductsToBeChecked =this.state.selectedCardProducts
        let selectedCard = this.state.selectedCard

        if(arrayofProductsToBeChecked.some(el =>el._id === selectedCard._id)){  
           
            arrayofProductsToBeChecked.map((el)=>{

                if (el._id ===  selectedCard._id) {
                    if(sign === 'plus'){

                         el.count ++

                    }else if(el.count<=1 && sign === 'minus'){
                        
                        arrayofProductsToBeChecked=arrayofProductsToBeChecked.filter(x=>x._id !== el._id)

                    }else if(el.count > 1 && sign === 'minus'){

                        el.count --

                    }else {
                      if (sign <=0 && sign !== ''){
                        arrayofProductsToBeChecked=arrayofProductsToBeChecked.filter(x=>x._id !== el._id)
                      }else {
                        el.count = sign
                      }
                      
                    }
                   
                   el.cost = el.count * el.discountedPrice
                }else {
                  return ""
                }
              
            })           
        }else {
                    selectedCard.count = 1
                    selectedCard.cost = selectedCard.count * selectedCard.discountedPrice
                    arrayofProductsToBeChecked.push(selectedCard)
        }

       this.setState({
        selectedCardProducts: arrayofProductsToBeChecked
        })   

        //console.log(this.state.selectedCardProducts)
        this.calculateTotal(this.state.selectedCardProducts)

    }

    calculateTotal=(arg)=>{
     
     // console.log(arg)
      //console.log(this.state.selectedCardProducts)
      
        // this.props.selectedCheckedProds
        var total = 0
       // console.log(arg)
        //this.state.selectedCardProducts.forEach(el => {
        if(arg){
          arg.forEach(el => {
              total = total + el.cost
              console.log(el)
          });

          this.setState({
              totalSale : total
          })
        }

        
     }

     clearDisplay=()=>{
       
        this.setState({
            selectedCardProducts: [],
            totalSale: ''
        })
    
     }





    render() { 

        let rendered
        let minrender
        switch(this.state.selectedTab){

            case 'productGroup':rendered = <ProductGroupSale selectedProds={this.selectedProds}/> ; minrender = <ProductMini selectedGroupProds={this.state.selectedProdGroupProds} handleCheckoutListEvent={this.counterFromBottom}/>
            break;
            case 'product': rendered = <ProductSale selectedGroupProds={this.state.selectedProdGroupProds} handleCheckoutListEvent={this.counterFromBottom}/>;
            break;
            case 'partnerGroup': rendered = <PartnerGroupSale/>; minrender = <PartnerMini/>
            break;
            case 'partner': rendered= <PartnerSale/>;
            break;
            default: rendered=<ProductGroupSale selectedProds={this.selectedProds}/>; minrender = <ProductMini selectedGroupProds={this.state.selectedProdGroupProds} handleCheckoutListEvent={this.counterFromBottom}/>

        }
        
       

        return (
          <div>
            <SalesNavBar showTab={this.showTab} />

            <div
              className="container-fluid row"
              style={{ backgroundColor: "white" }}
            >
              <div className="col-12 col-sm-6 col-md-8">
                <div
                  className="mr-1 ml-1 mt-2"
                  style={{
                    backgroundColor: "rgb(230,229,229)",
                    borderRadius: 15
                  }}
                >
                  <SaleDisplay
                    selectedCheckedProds={this.state.selectedCardProducts}
                    totalSale={this.state.totalSale}
                    handlePlusMinusEvent={this.counterFromBottom}
                    clearDisplay={this.clearDisplay}
                    sendTotal = {this.calculateTotal}
                  />
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div
                  className="mr-1 ml-1 mt-2"
                  style={{
                    backgroundColor: "rgb(230,229,229)",
                    borderRadius: 15
                  }}
                >
                  {rendered}
                </div>
                <div
                  className="mr-1 ml-1 mt-2"
                  style={{
                    backgroundColor: "rgb(230,229,229)",
                    borderRadius: 15
                  }}
                >
                  {minrender}
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Pos;