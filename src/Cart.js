import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FacebookLogin from "./Facebook";


function Cart(props){
    return (
    <div class="container">
        <h2> Your Shopping Cart</h2>
            {props.itemlist.map((product)=>{
                
                if (product.value>0){
                return (
                    
                    <div key={product.id} class="container border">
                    <img src={product.image} class="rounded d-block" alt="img"></img>
                    <span class='h6'><strong> Quantity: {product.value}</strong></span>
                    <p>{product.desc}</p>
                    </div>
                )}
            })}


            <a href="/facebook" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Check Out</a>

            </div>
   
    )
};
       

export default Cart;