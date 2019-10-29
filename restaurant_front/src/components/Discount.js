import React, { Component } from 'react';
import AdminNavbar from './AdminNavbar';
import apiCalls from '../config/apis'



class Discount extends Component {
    state = {  

        buttonlabel: 'Create',
        discountName: '',
        discountAmount: '',
        discountType: 'default',
        active: false,
        toedit: '',

        allDiscounts : [],
        
    }


    componentDidMount= async()=>{

        await this.getData()

    }



    getData=()=>{
        
        apiCalls.getAllDiscount()
        .then((res)=>{
            console.log(res.data)
            this.setState({
                allDiscounts: res.data
        })
    })

    }



    onChangeDiscountName=(e)=>{
    this.setState({
        discountName: e.target.value
    })
}

onChangeDiscountAmount=(e)=>{
    this.setState({
        discountAmount: e.target.value
    })
}

onChangeDiscountType=(e)=>{
    this.setState({
        discountType: e.target.value
    })
}

onChangeActiveLevel=()=>{
    this.setState({
        active: !this.state.active
    })
}


onSubmitEvent= async(e)=>{
  
    
   // e.preventDefault()

    let discountBody

    if (this.state.toedit){

        discountBody={
            discountName: this.state.discountName,
            discountAmount: this.state.discountAmount,
            discountType: this.state.discountType,
            activeStatus: this.state.active
        }
        console.log(discountBody, this.state.toedit._id)
      
       apiCalls.updateDiscount(this.state.toedit._id, discountBody)
        
    }else {

        discountBody={
            discountName: this.state.discountName,
            discountAmount: this.state.discountAmount,
            discountType: this.state.discountType,
            activeStatus: this.state.active
        }
    
        apiCalls.createDiscount(discountBody)
    }
   

    this.setState({
        discountName: '',
        discountAmount: '',
        discountType: 'default',
        active: false,
        buttonlabel: 'Create'
    })

    
    await this.getData()
}

editAction=param=>()=>{


    apiCalls.getDiscountFromID(param)
    .then((res)=>{ 
      
    this.setState({

        toedit: res.data,
        discountName: res.data.discountName,
        discountAmount: res.data.discountAmount,
        discountType: res.data.discountType,
        active: res.data.activeStatus,
        buttonlabel: 'Update'
        
      })

    })
}


    render() { 
        return ( 
            <div>
                <div>
                    <AdminNavbar active="discount" />
                </div>
               

                <h1>DISCOUNT PAGE</h1>

                <form className="form form-inline" onSubmit={this.onSubmitEvent}>
                    <div className="form-group">
                    <label htmlFor="inputDiscount">Discount</label>
                    <input
                        type="text"
                        className="form-control"
                        id="discountName"
                        placeholder="Name"
                        value={this.state.discountName}
                        onChange={this.onChangeDiscountName}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="discountAmount">Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        id="discountAmount"
                        placeholder="Amount"
                        value={this.state.discountAmount}
                         onChange={this.onChangeDiscountAmount}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="inputType">Product Group</label>
                        <select className="form-control"value={this.state.discountType}  onChange={this.onChangeDiscountType}>

                            <option value='default' disabled>Choose...</option>
                            <option value='Percentage'>Percentage</option>
                            <option value='Flat'>Flat</option>
                                
                        </select>
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

            <div>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">-</th>
                  </tr>
                </thead>
                <tbody>


                    {this.state.allDiscounts.map((el, index) => {
                    const status =  el.activeStatus === true ? 'Active': 'Disabled'
                    return (
                    <tr key={el._id} >
                    <th scope="row">{index + 1}</th>
                    <td>{el.discountName}</td>
                    <td>{el.discountType}</td>
                    <td>{el.discountAmount}</td>
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
 
export default Discount;