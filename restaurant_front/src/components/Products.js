import React, { Component } from 'react';
import AdminNavbar from './AdminNavbar'
//import axios from 'axios'
import apiCalls from './../config/apis'


class Products extends Component {
    state = { 
        inputProductGroup: 'default',
        inputProductGroupID: '',
        inputProduct:'',
        inputPrice: '',
        inputUOM: 'default',
        UOM: [
            {_id: 0, name: 'test 1'},
            {_id: 1, name: 'test 2'}
        ],
        active: false,
        productGroups:[],
        product:[],
        buttonlabel: 'Create',
        toedit: '',
        discountID: 'default',
        allDiscount: []
     }



     getData =async()=>{

        //get all Products
       await apiCalls.getAllProducts()
        .then(res=>{
         this.setState({
         product : res.data   
      })})

      //get all Product groups
      await apiCalls.getAllProductGroups()
      .then(res=>{
       this.setState({
       productGroups : res.data ,

    })})

    //get all discounts
    await apiCalls.getAllDiscount()
    .then(res=>{
      //console.log(res.data)
      this.setState({
        allDiscount: res.data
      })})
    

    }
 
      
    componentDidMount= ()=>{
        this.getData()
    }


    onChangeProdGroup= async(e)=>{

        let tempID = e.target.value
        await apiCalls.getProductGroupFromID(tempID)
        .then(res=>{
            console.log(res)
            this.setState({
                inputProductGroup:  res.data.productGroup,
                inputProductGroupID : tempID
            })
        })
    }


    onChangeDiscount=(e)=>{
        this.setState({
            discountID: e.target.value
        })
    }



    onChangeProduct= (e)=>{
        this.setState({
            inputProduct:  e.target.value
        })
    }


    onChangePrice= (e)=>{
        this.setState({
            inputPrice:  e.target.value
        })
    }
    onChangeUOM=(e)=>{
        this.setState({
            inputUOM: e.target.value
        })
    }
    onChangeActive=(e)=>{
        this.setState({
            active: !this.state.active
        })
    }

    onSubmitEvent=async(e)=>{
       e.preventDefault()
        
        let productBody
        
        if(this.state.toedit){
            if(this.state.discountID ===  'default'){
                productBody={
                    productGroup: this.state.inputProductGroup,
                    productGroupID: this.state.inputProductGroupID,
                    product: this.state.inputProduct,
                    price: this.state.inputPrice,
                    UOM: this.state.inputUOM,
                    discountID: '',
                    activeStatus: this.state.active
                 }

            }else{
                productBody={
                    productGroup: this.state.inputProductGroup,
                    productGroupID: this.state.inputProductGroupID,
                    product: this.state.inputProduct,
                    price: this.state.inputPrice,
                    UOM: this.state.inputUOM,
                    discountID: this.state.discountID,
                    activeStatus: this.state.active
                 }
            }
            
             await apiCalls.updateProduct(this.state.toedit._id, productBody)
        }else{

            if(this.state.discountID === 'default'){
                productBody={
                    productGroup: this.state.inputProductGroup,
                    productGroupID: this.state.inputProductGroupID,
                    name: this.state.inputProduct,
                    price: this.state.inputPrice,
                    unitOfMeasure: this.state.inputUOM,
                    discountID: '',
                    activeStatus: this.state.active
                    }

            }else{
                productBody={
                    productGroup: this.state.inputProductGroup,
                    productGroupID: this.state.inputProductGroupID,
                    name: this.state.inputProduct,
                    price: this.state.inputPrice,
                    unitOfMeasure: this.state.inputUOM,
                    discountID: this.state.discountID,
                    activeStatus: this.state.active
                    }

            }
            

                await apiCalls.createProduct(productBody)
                // .then(res=>console.log('here',res.data))
                
        }


       
            this.setState({
                inputProductGroup: 'default',
                inputProductGroupID: '',
                inputProduct: '',
                active: false,
                inputUOM: 'default',
                discountID: 'default',
                inputPrice: '',
                buttonlabel:'Create'
            })
         
        this.getData() 
    }
    
    toEditEvent=param=>(e)=>{
        

        apiCalls.getProductFromID(param)
        .then((res)=>{
            
            this.setState({
              toedit: res.data,
              inputProductGroup: res.data.productGroup,
              inputProductGroupID: res.data.productGroupID,
              inputProduct: res.data.name,
              inputPrice: res.data.price,
              inputUOM: res.data.unitOfMeasure,
              discountID: res.data.discountID,
              active: res.data.activeStatus,
              buttonlabel: 'Update'
              
            })
          })
          this.getData()
        console.log(this.state.discountID)
    }
  
    render() { 
      
        return (
          <div>
            <div>
              <AdminNavbar active="product" />
              <h1>MAIN PRODUCT PAGE</h1>

              <form className="form form-inline" onSubmit={this.onSubmitEvent}>
                <div className="form-group">
                  <label htmlFor="inputProductGroup">Product Group</label>
                  <select
                    id={this.state.inputProductGroupID}
                    className="form-control"
                    value={this.state.inputProductGroupID}
                    onChange={this.onChangeProdGroup}
                  >
                    <option value="default" disabled>
                      Choose...
                    </option>

                    {this.state.productGroups.map(el => {
                      if (el.activeStatus) {
                        return (
                          <option key={el._id} id={el._id} value={el._id}>
                            {el.productGroup}
                          </option>
                        );
                      } else return "";
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputProduct">Product </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputProduct"
                    placeholder="Product"
                    value={this.state.inputProduct}
                    onChange={this.onChangeProduct}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPrice">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputPrice"
                    placeholder="50.99"
                    value={this.state.inputPrice}
                    onChange={this.onChangePrice}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputUOM">Unit of Measurement</label>
                  <select
                    id="inputUOM"
                    className="form-control"
                    value={this.state.inputUOM}
                    onChange={this.onChangeUOM}
                  >
                    <option value="default" disabled>
                      Choose UOM...
                    </option>

                    {this.state.UOM.map(el => {
                      return (
                        <option key={el._id} id={el._id} value={el.name}>
                          {el.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-group" style={{ marginRight: 20 }}>
                  <label htmlFor="inputDiscount">Discount</label>
                  <select
                    onChange={this.onChangeDiscount}
                    value={this.state.discountID}
                    id="inputDiscount"
                  >
                    <option value="default">Select Discount</option>

                    {this.state.allDiscount.map(el => {
                      if (el.activeStatus) {
                        return (
                          <option key={el._id} value={el._id}>
                            {el.discountName}
                          </option>
                        );
                      }
                    })}
                  </select>
                </div>

                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      checked={this.state.active}
                      onChange={this.onChangeActive}
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Active
                    </label>
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  style={{ margin: 10 }}
                  className="btn btn-primary"
                >
                  {this.state.buttonlabel}
                </button>
              </form>
            </div>

            <div>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Group</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">-</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.product.map((el, index) => {
                    if (el) {
                      const status =
                        el.activeStatus === true ? "Active" : "Disabled";
                      return (
                        <tr key={el._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{el.productGroup}</td>
                          <td>{el.name}</td>
                          <td>{el.price}</td>
                          <td>{status}</td>
                          <td>
                            <button
                              onClick={this.toEditEvent(el._id)}
                              className="btn btn-primary btn-sm"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr>
                          <th scope="row">#</th>
                          <td>{el.productGroup}</td>
                          <td>
                            <h1>NO DATA</h1>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      );
                    }
                  })}

                  {/* <tr>
                            <th scope="row">2</th>
                            <td>Main Meal</td>
                            <td>Steak and Mash Potatoes</td>
                            <td>3000</td>
                            <td>Active</td>
                            <td><button>Edit</button></td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Drink</td>
                            <td>Red Wine</td>
                            <td>2500</td>
                            <td>Active</td>
                            <td><button>Edit</button></td>
                            </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}
 
export default Products;