import React, { Component } from 'react';
import SalesScreen from './SalesDisplayScreen';
import SalesButton from './salesDisplayButtons';
import Popup from './../../Popup'

class SalesDisplay extends Component {
    state = { 
        showPopup: false,
       
    }



    sendToTop=(arg1, arg2)=>{

        this.props.handlePlusMinusEvent(arg1, arg2)
    }


     togglePopup=()=> { 

        this.setState({  
             showPopup: !this.state.showPopup  
        });  
    } 


    render() { 
        return (
          <div style={{ height: 590 }}>
            {this.state.showPopup && this.props.totalSale ? (
              <Popup
                text={
                  "You are about to conclude a transaction worth #" +
                  this.props.totalSale
                }
                closePopup={this.togglePopup}
              />
            ) : null}
            <div>
              <label htmlFor="totalInput">TOTAL</label>
              <input
                id="totalInput"
                type="text"
                disabled
                className="form-control"
                style={{ width: 150, marginRight: "auto", marginLeft: "auto" }}
                value={this.props.totalSale}
              ></input>
            </div>

            <div>
              <SalesScreen
                selectedCheckedProds={this.props.selectedCheckedProds}
                sendToTop={this.sendToTop}
                sendTotal = {this.props.sendTotal}
              />
            </div>

            <div>
              <SalesButton
                totalSale={this.props.totalSale}
                togglePopup={this.togglePopup}
                showPopup={this.state.showPopup}
                clearDisplay={this.props.clearDisplay}
              />
            </div>
          </div>
        ); 
        
    }
}
 
export default SalesDisplay;