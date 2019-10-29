import React from 'react';  
import './../index.css';  

class Popup extends React.Component {  




  render() {  
        return (  
        <div className='popup'>  
        <div className='popup\_inner'>  
          <div className="card popupcard" >
            <div className="card-body">
              <div className="class-text">
                {this.props.text}   
              </div>
              <button onClick={this.props.closePopup}>Close</button>
            </div>
          </div>
        </div>  
        </div>  
);  
}  
}  

export default Popup;