import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import products from "./products";
import Product from "./displayProduct";
import Navbar from './Navbar';



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      products:products
    };
  }

  render(){
    return (
    <div>
    <Navbar total={this.state.products.length}/>
    </div>
  );
}
};

export default App;
