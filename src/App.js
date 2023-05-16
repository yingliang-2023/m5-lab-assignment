import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import products from "./products";
import Product from "./displayProduct";
import Navbar from './Navbar';

console.log(products);

function App() {
  return (
    <div>
    <Navbar />
    
    <div>
    {products.map((product)=>
    <Product key={product.key}
             desc={product.desc}
             image={product.image}
             rating={product.rating}
            value={product.value} />
    )}
    </div>

    </div>
  );
}
export default App;
