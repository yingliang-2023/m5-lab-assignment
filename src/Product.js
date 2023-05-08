import React from "react";

function Product(props) {
  return (
    <div  >
      <h3>{props.desc}</h3>
      <img src={props.image}></img>
      <input value={props.value}/> <span>quantity</span>
    </div>
  );
}

export default Product;