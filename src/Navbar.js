import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import products from "./products";
import Product from "./displayProduct";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

function Navbar(props) {
  return (
    <div className="header ">

    {/*Navigation*/}
      <Router>
            <Link to="/">
              Shop 2 React
            </Link>
            <Link to="/cart">
            <div className="position-absolute top-0 end-0">
     <FontAwesomeIcon
        icon={faShoppingCart}
      />
      <span># items</span>
      </div> 
            </Link>
        

        {/*Routes*/}
        <Routes>
          <Route path="/" element={<Home />}/>  

          <Route
            path="/cart"
            element={<Cart />}
            // element={<cart lists1={props.lists1} lists2={props.lists2} />}
          />
          
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;