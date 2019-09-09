import React, { Component } from 'react';
import logo from '../../logo.svg';
import apiCalls from './../../config/apis'


class MiniCards extends Component {
    state = { 
       selectedPRoductToCheck : ''
     }
s



    handleEvent=param=>async()=>{
        await apiCalls.getProductFromID(param)
        .then((res)=>{

            this.setState({
                selectedPRoductToCheck: res.data
            })
            // console.log(res.data)
        })
       this.props.sendToTop(this.state.selectedPRoductToCheck)

    }

    

    render() { 


        let {_id, name }= this.props.data

        return ( 
           
            <div key={_id}className="col-4 " style={{padding:"5px"}}>
                <button className="card" style={{display: "block"}} onClick={this.handleEvent(_id)}>
                    <img className="card-img-top" src={logo} alt={''}/>
                    <div className="card-body" style={{padding:0}}>
                        <p className="card-text" style={{fontSize:12}}>{name}</p>
                    </div>
                </button>
            </div>
         );
    }
}
 
export default MiniCards;