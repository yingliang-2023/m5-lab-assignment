import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



function Product(props) {

  var [count, setCount] = useState(0);
  var [show,setShow] = useState(false);
  var [total, setTotal] = useState(0);

  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  function addProduct(){
    setCount(count+1);
    setTotal(total+1);
  }
 
  function removeProduct(){
    setCount(count-1);
    setTotal(total-1);
  }

  return (
    <div  >
      <h3>{props.desc}</h3>
      <img src={props.image} onClick={()=>handleShow()}></img>
      <button onClick={removeProduct}>-</button>
      <button onClick={addProduct}>+</button>
      <input name="quantity" value={count}/> <span>quantity</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.desc}</Modal.Title>
          <Modal.Body>{<img src={props.image} width="350" className="mx-5"></img>}
         <p><span className="text-dark">Ratings: {props.rating}</span></p> </Modal.Body>
        </Modal.Header>
      </Modal>
    
    
    </div>
  );
}

export default Product;
