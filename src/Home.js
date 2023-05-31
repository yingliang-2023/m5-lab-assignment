import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./displayProduct";



function Home(props){
  


        return (
            <div class="container">
            <label for="sortType">Sort price by: </label>

            <select name="sortType" id="sortType">
                <option value="Lowest">Lowest</option>
                <option value="Normal">Normal</option>
                <option value="Highest">Highest</option>
            </select>
            <Product
            itemlist={props.itemlist}
            addProduct={props.addProduct}
            removeProduct={props.removeProduct}
        />
            </div>
        )
};

export default Home;