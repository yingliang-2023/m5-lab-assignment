import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import products from "./products";
import Product from "./Product";

console.log(products);

function App() {
  return (
    <div>
     <h1>React Shop Cart</h1>

    {products.map((product)=>
    <Product key={product.key}
             desc={product.desc}
             image={product.image}
            value={product.value} />
    )}
    </div>
  );
}
export default App;
