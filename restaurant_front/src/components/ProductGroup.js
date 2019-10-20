import React, { Component } from 'react';
import AdminNavbar from './AdminNavbar';
import apiCalls from '../config/apis'


class ProductGroup extends Component {
    state = { 
        productGroup: '',
        active: false,
        buttonlabel: 'Create',
        toedit: '',
        productGroupTable:[]
     }
   
    
     getData= async()=>{
    //   console.log(apiCalls.getAllProductGroups())
      await apiCalls.getAllProductGroups()
      .then(res=>{
        console.log(res.data)
          this.setState({
          productGroupTable: res.data
     }) 
    })
    }

    componentDidMount=()=>{
     this.getData()
    }

    onChangeProductGroup=(e)=>{
     
        this.setState({
            productGroup: e.target.value
        })
        
    }

    onChangeActiveLevel=(e)=>{

        this.setState({
            active: !this.state.active
        })
    }
    
    onSubmitEvent= async(e)=>{

        e.preventDefault()

        let productGroupBody

        if(this.state.toedit){

            productGroupBody = {
              productGroup: this.state.productGroup,
              activeStatus: this.state.active,
            }
          
            await apiCalls.updateProductGroup(this.state.toedit._id, productGroupBody)
            
        }else {

            productGroupBody ={
              productGroup: this.state.productGroup,
              activeStatus: this.state.active
            };
            await apiCalls.createProductGroup(productGroupBody)
            // .then(res=>console.log('here',res.data))
          }
          
          

          this.setState({
            productGroup: '',
            active: false,
            toedit: '',
            buttonlabel: "Create"
          })
          
          this.getData()

        
    }

    editAction= param => async(e) =>{
      e.preventDefault()

      apiCalls.getProductGroupFromID(param)
      .then((res)=>{ 
        
        this.setState({
          toedit: res.data,
          productGroup: res.data.productGroup,
          active: res.data.activeStatus,
          buttonlabel: 'Update'
          
        })
      })

      this.getData()

    }



    render() { 
      
        return (
          <div>
            <div>
              <AdminNavbar active="productGroup" />

              <h1>MAIN PRODUCT GROUP PAGE</h1>

              <form className="form form-inline" onSubmit={this.onSubmitEvent}>
                <div className="form-group">
                  <label htmlFor="inputProductGroup">Product Group </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputProductGroup"
                    placeholder="Product Group"
                    value={this.state.productGroup}
                    onChange={this.onChangeProductGroup}
                  />
                </div>

                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="activeGridCheck"
                      checked={this.state.active}
                      onChange={this.onChangeActiveLevel}
                    />
                    <label className="form-check-label" htmlFor="activeGridCheck">
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
                    <th scope="col">Status</th>
                    <th scope="col">-</th>
                  </tr>
                </thead>
                <tbody>

                    {/* {this.displayTable}
                    <ProductGroupTable data={this.state.productGroupTable}/> */}

                    {this.state.productGroupTable.map((el, index) => {
                    const status =  el.activeStatus === true ? 'Active': 'Disabled'
                    return (
                    <tr key={el._id} >
                    <th scope="row">{index + 1}</th>
                    <td>{el.productGroup}</td>
                    <td>{status}</td>
                    <td>
                      <button  onClick={this.editAction(el._id)} className="btn btn-primary btn-sm">Edit</button>
                    </td>
                  </tr>)
                    })}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}
 
export default ProductGroup;