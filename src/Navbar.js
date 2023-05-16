import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import products from "./products";
import Product from "./displayProduct";
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers';


function Navbar(){
return (

<h1>Shop 2 React
<div className="position-absolute top-0 end-0">
     <FontAwesomeIcon
        icon={faShoppingCart}
        
      />
      <span>{total}</span>
      <span> items</span>
      </div> 
      </h1>


)
}

export default Navbar;