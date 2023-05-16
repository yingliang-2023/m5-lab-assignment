import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import products from "./products";
import Product from "./displayProduct";


class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
       products:products
      };
    };

    render() {
        return (
            <div>
                {products.map((product)=>
                    <Product key={product.key}
                    desc={product.desc}
                    image={product.image}
                    rating={product.rating}
                    value={product.value} />
                    )}
            </div>
        )}
}

export default Home;