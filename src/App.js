import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import items from "./products";
import Navbar from './Navbar';



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      products:items
    };
  };

  addProduct = (item) => {
    const updateQuantity = item.value++;
    this.setState({ updateQuantity });
  };

  removeProduct = (item) => {
    if (item.value > 0) {
      const updateQuantity = item.value--;
      this.setState({updateQuantity});
    }
  };

  render(){
    return (
    <div>
    <Navbar itemlist={this.state.products}
            addProduct={this.addProduct}
            removeProduct={this.removeProduct}

    />
    </div>
  );
}
};

export default App;
