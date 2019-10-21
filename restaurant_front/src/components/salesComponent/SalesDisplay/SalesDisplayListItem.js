import React, { Component } from 'react';
import plus from '../../../add.svg'
import minus from '../../../minus.svg'


class SalesList extends Component {
    state = {  }



    // componentDidMount() {
    //     this.setState({products: this.props.listItems})
    //     console.log(this.props)
    // }

    onChangeEvent=param=>()=>{
        console.log(param)
       // console.log(this.state)
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

    render() { 
        
        const {_id, name, count, price} = this.props.listItems
        return (
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
        );
    }
}
 
export default SalesList;