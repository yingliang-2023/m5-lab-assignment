import React from "react";

function Product(props) {
  return (
    <div  >
      <h3>{props.desc}</h3>
      <img src={props.image}></img>
      <p>{props.value}</p>
    </div>
  );
}

export default Product;