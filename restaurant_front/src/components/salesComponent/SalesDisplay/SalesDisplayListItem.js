import React, { Component } from 'react';
import plus from '../../../add.svg'
import minus from '../../../minus.svg'
//import apiCalls from './../../../config/apis'


class SalesList extends Component {
    state = { 
      //  finalValue : this.props.listItems

     }


    componentDidMount() {

      console.log(this.props.listItems)
      this.props.sendTotal()
    }

    onChangeEvent=params=>(e)=>{
      // let tempValue = this.props.listItems

      //   console.log(e.target.value)
      //   tempValue.count = e.target.value
      //   this.setState({
      //     finalValue : tempValue
      //   })
       // console.log(this.state)
       this.changeQuantity(params, e.target.value)
    }

    changeQuantity=(arg1, arg2)=>{
     this.props.sendToTopFromDisplayList(arg1, arg2)
    }

    iconStyle=()=>{
        return {
            width: 7,
            height:7
        }
    }



    // calculateDiscount=async()=>{
    //   let tempvalues = this.state.finalValue

    //   if(tempvalues.discountID){

    //     console.log(this.props.listItems.discountID)
    //     await apiCalls.getDiscountFromID(this.props.listItems.discountID)
    //     .then((res)=>{

    //       if(res.data.activeStatus){
    //         if(res.data.discountType === "flat"){

    //           console.log('this is flat rate')
    //           let tempcalc = tempvalues.price -  res.data.discountAmount
    //           if (tempcalc < 0){
    //             tempvalues.price = 0
    //           }else {
    //             tempvalues.price = tempcalc  
    //           }

    //          tempvalues.disDisplay = `${res.data.discountName} discount of #${res.data.discountAmount} had been added to ${tempvalues.name}`

    //         }else {

    //           console.log('this is a % rate')
    //           console.log(res.data)


    //           const tempcalc = (res.data.discountAmount/100) *(tempvalues.price) 
    //           console.log(tempvalues.price)
    //           if (tempcalc < 0){
    //             tempvalues.price = 0
    //           }else {
    //             tempvalues.price = tempcalc  
    //           }

    //           tempvalues.disDisplay = `${res.data.discountName} discount of ${res.data.discountAmount}% had been added to ${tempvalues.name}`
    //         }
             
    //       }
    //     })

    //     this.setState({
    //       finalValue: tempvalues
    //     })

    //   }else {

    //     console.log('no discount')
    //     return tempvalues

    //   }

     

    // }

    render() { 

      
        
        const {_id, name, count, price, displayStringForProdGrp, displayStringForProd} = this.props.listItems

        return (

        <>
          <tr>
            <th scope="row" style={({ padding: 0 }, { marginBottom: 0.5 })}>
              {1 + this.props.index}
            </th>
            <td style={{ padding: 0 }} /*style={{float:"left"}}*/>{name}</td>

            <td style={{ padding: 0 }}>
              <button  onClick={()=>this.changeQuantity(_id, 'minus')}>
                <img src={minus} alt='' style={this.iconStyle()} />
              </button>

                <input style={{ width: 40 }} value={count} onChange={this.onChangeEvent(_id)} ></input>

              <button onClick={()=>this.changeQuantity(_id, 'plus')}>
                <img src={plus} alt='' style={this.iconStyle()} />
              </button>
            </td>

            <td style={{ padding: 0 }}>{price}</td>
            <td style={{ padding: 0 }}>{price * count}</td>
          </tr>
          <tr>
            <th scope="row" style={({ padding: 0 }, { marginBottom: 0.5 })}>
            
            </th>
            <td>
            {displayStringForProdGrp}
            {displayStringForProd}  
            </td>
            
          </tr>
        </>

          
        );
    }
}
 
export default SalesList;