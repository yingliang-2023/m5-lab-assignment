import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {faCirclePlus,faCircleMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Product(props) {

  var [show,setShow] = useState(false);
  var [obj, setObj] = useState({});

  const handleClose=()=>setShow(false);

  const handleShow=(item)=>{
      setShow(true);
      setObj(item);
      
  };

  return (
    <div className="container">
      {props.itemlist.map((product)=>(
        <div key={product.id} className="border">
        <p className="h4">{product.desc} 
        <span className="price"><strong>${product.price}</strong></span></p> 
        <img src={product.image} alt="img" onClick={(event)=>handleShow(product)} />

        <button onClick={()=>props.addProduct(product)}>
        <FontAwesomeIcon icon={faCirclePlus} style={{color: "#6e91cf",}} />        
        </button>

        <button onClick={()=>props.removeProduct(product)}>
        <FontAwesomeIcon icon={faCircleMinus} style={{color: "#6e91cf",}} />        
        </button>

        <input type="number" value={product.value} /> Quantity
       
        
      </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{obj.desc}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {<img alt="img" src={obj.image} width="350" className="mx-5"></img>}
         <p><span className="text-dark">Ratings: {obj.rating}</span></p> 
         </Modal.Body>
        
      </Modal>
      
    
    </div>
  
    )
}
    
    
    


export default Product;
