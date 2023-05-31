import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Product(props) {

  var [show,setShow] = useState(false);

  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  return (
    <div>
      {props.itemlist.map((product)=>(
        <div key={product.id}>
        <p>{product.desc}</p>
        <img src={product.image} alt="img" onClick={()=>handleShow} />
        <button onClick={()=>props.addProduct(product)}>+</button>
        <button onClick={()=>props.removeProduct(product)}>-</button>
        <input type="number" value={product.value} /> Quantity
        </div>))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.desc}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {<img alt="img" src={props.image} width="350" className="mx-5"></img>}
         <p><span className="text-dark">Ratings: {props.rating}</span></p> 
         </Modal.Body>
        
      </Modal>
    
    </div>
  
    )
}
    
    
    


export default Product;

