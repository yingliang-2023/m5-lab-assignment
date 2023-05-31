import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./displayProduct";



function Home(props){
    function getSelectedValue(event) {
        console.log(event.target.value)
        return event.target.value
        
     }

        return (
            <div class="container">
            <label for="sortType" className='dropdown'>Sort price by: </label>

            <select name="sortType" id="sortType" onChange={ (event)=>props.onSort(props.itemlist,getSelectedValue(event))}>
                <option value="lowest">Lowest</option>
                <option selected="selected" value="normal">Normal</option>
                <option value="highest">Highest</option>
            </select>
            <Product
            itemlist={props.itemlist}
            addProduct={props.addProduct}
            removeProduct={props.removeProduct}
        />
            </div>
        )
};

export default Home;