import './App.css';
import React, { Component} from 'react';
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
    this.setState({item:{value:item.value++} });
  };




  removeProduct = (item) => {
    if (item.value > 0) {
      this.setState({item:{value:item.value++}});
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
