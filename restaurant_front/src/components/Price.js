import React, { Component } from 'react';
import apiCalls from './../config/apis'


class Price extends Component {
    state = { 
        priceList:[]
     }

     componentDidMount= async()=>{
       await apiCalls.getAllProducts()
        .then((res)=>{
          this.setState({
            priceList: res.data
        })  
        })
        
     }
    render() { 
        console.log(this.state.priceList)
        
        return ( 
            <div>
                <h1>Price Page</h1>
                <div className="form-inline  form-group justify-content-center">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                </div>
                <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Group</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.priceList.map((el, index)=>{
                                if(el.activeStatus === true){
                                    return (
                                        <tr key={el._id}>
                                        <th scope="row">{index+1}</th>
                                        <td>{el.productGroup}</td>
                                        <td>{el.name}</td>
                                        <td>{el.price}</td>
                                        </tr>)
                                }else{
                                    return (
                                            <tr key={el._id}style={{textDecoration:"line-through", color:'grey'}}>
                                            <th scope="row">#</th>
                                            <td>{el.productGroup}</td>
                                            <td>{el.name}</td>
                                            <td>{el.price}</td>
                                            </tr>)
                                    
                                }
                                
                            })}

                        </tbody>
                        </table>
            </div>
            
         );
    }
}
 
export default Price;