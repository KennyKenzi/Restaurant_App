import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Price from './components/Price';
import Admin from './components/Admin';
import Pos from './components/salesComponent/POS';
import User from './components/User';
import Products from './components/Products';
import ProductGroup from './components/ProductGroup';
// import PartnerGroupSale from './components/salesComponent/PartnerGroupSale';
// import PartnerSale from './components/salesComponent/PartnerSale';
// import ProductGroupSale from './components/salesComponent/ProductGroupSale';
// import ProductSale  from './components/salesComponent/ProductSale'

class App extends Component {
  state = {  }
  render() { 

  return (
    <Router>

      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Reese's</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/price">Price</a>
              <a className="nav-item nav-link" href="/pos">Sales</a>
              <a className="nav-item nav-link" href="/admin">Admin</a>
            </div>
          </div>
        </nav>


        


        <Route path ="/" exact component= {Home}/>
        <Route path = "/price" component = {Price}/>
        <Route path = "/pos" component = {Pos}/>
        <Route path = "/products" component = {Products}/>
        <Route path = "/productgroup" component = {ProductGroup}/>
        <Route path = "/admin" component = {Admin}/>
        <Route path = "/users" component = {User}/>
        {/* <Route path = "/productGroupSale" component = {ProductGroupSale}/>
        <Route path = "/productSale" component = {ProductSale}/>
        <Route path = "/partnerGroupSale" component = {PartnerGroupSale}/>
        <Route path = "/partnerSale" component = {PartnerSale}/> */}
      </div>
    </Router>
  );
}
  }

export default App;
