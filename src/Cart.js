import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function Cart(props){
    return (
        <div>
        <h2> Your Shopping Cart</h2>
            {props.itemlist.map((product)=>{
                if (product.value>0){
                return (
                    <div key={product.id}>
                    <p>{product.desc}</p>
                    <img src={product.image} alt="img"></img>
                    <p> Quantity: {product.value}</p>

                    </div>
                )}
            })}
           </div>
    )
};
       

export default Cart;