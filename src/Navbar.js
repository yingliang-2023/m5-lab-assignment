import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Facebook from './Facebook';



function Navbar(props) {

  return (
    <div className="header ">

    {/*Navigation*/}
      <Router>
            <Link to="/">
              <h1>Shop 2 React</h1>
            </Link>

            <Link to="/cart">
            <div className="position-absolute top-0 end-0">
     <h5>
     <FontAwesomeIcon
        icon={faShoppingCart}
      />
      {props.itemlist
                .map((item) => item.value)
                .reduce((acc, curr) => acc + curr, 0)}{" "}
              items
      </h5>
      </div> 
            </Link>
        

        {/*Routes*/}
        <Routes>
          <Route path="/" element={<Home 
            itemlist={props.itemlist}
              addProduct={props.addProduct}
              removeProduct={props.removeProduct}
          />}/>  

          <Route
            path="/cart"
            element={<Cart itemlist={props.itemlist}/>}
          />

          <Route
            path="/facebook"
            element={<Facebook  />}
          />

          
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;
