import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

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

            
           <div>{props.itemlist.map((item) =>item.value).reduce((acc, curr) => acc + curr, 0) >0? 
                        <a id="checkOutButton" href="/facebook" class="btn btn-primary btn-lg" role="button" aria-pressed="true">Check Out</a>
                        : 
                        <div>
                        <p class='h6'>Your cart is empty!</p>
                        <button class="btn btn-success btn">Continue Shop</button>

                        </div>


                    }
                
           </div>
            
            

    </div>
   
    )
};
       

export default Cart;