import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./displayProduct";



function Home(props){
  


        return (
            <div>
            <Product
            itemlist={props.itemlist}
            addProduct={props.addProduct}
            removeProduct={props.removeProduct}
        />
            </div>
        )
};

export default Home;