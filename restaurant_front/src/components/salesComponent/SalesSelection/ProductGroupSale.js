import React, { Component } from 'react';
import apiCalls from '../../../config/apis'
import logo from '../../../logo.svg'

class ProductGroupSale extends Component {
    state = { 

        currentProdGroups:[],
        displayedProdsFromProdGroup: ''
     }
 
    componentDidMount=()=>{

        this.getProductGroupData()
        
    }

    getProductGroupData=()=>{
        apiCalls.getAllProductGroups()
        .then((res)=>{
            this.setState({
                currentProdGroups: res.data
            })
        })

    }

        
    handleEvent= param=> async()=>{
       
        
        if(param){
            await apiCalls.getProductFromGroupID(param)
            .then((res)=>{
              
              this.setState({
                  displayedProdsFromProdGroup : res.data
              }) 
          })
        }else{
              return ""
          }

        this.props.selectedProds(this.state.displayedProdsFromProdGroup)

    }

    render() { 
        // console.log(this.stat)
        return ( 


           

            <div style={{height: 300, overflow: "auto"}}>
                
                <h4>Select Product Group </h4>
                <div className="row m-1 clearfix">
                
                 {
                    this.state.currentProdGroups.map((el)=>{
                        if(el.activeStatus){
                            return(
                                <div key={el._id}className="col-4 " style={{padding:"5px"}}>
                                    <button className="card" style={{display: "block"}} onClick={this.handleEvent(el._id)}>
                                        <img className="card-img-top" src={logo} alt={''}/>
                                            <div className="card-body" style={{padding:0}}>
                                                <p className="card-text" style={{fontSize:12}}>{el.productGroup}</p>
                                            </div>
                                    </button>
                                </div>
                       
                        ) }else{
                            return ('')
                        }
                    })
                }
                
                   
                    
                </div>

            </div>

         );
    }
}
 
export default ProductGroupSale;