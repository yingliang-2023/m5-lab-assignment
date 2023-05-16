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
    </div>
  );
}
export default App;
