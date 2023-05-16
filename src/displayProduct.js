import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



function Product(props) {

  var [count, setCount] = useState(0);
  var [show,setShow] = useState(false);

  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);
  var total=0;
 
  return (
    <div  >
      <h3>{props.desc}</h3>
      <img src={props.image} onClick={()=>handleShow()}></img>
      <button onClick={() => {setCount(count-1);total=-1}}>-</button>
      <button onClick={() => {setCount(count+1);total=+1}}>+</button>
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