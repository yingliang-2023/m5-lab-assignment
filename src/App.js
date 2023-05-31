import './App.css';
import React, { Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import items from "./products";
import Navbar from './Navbar';



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sortType:"asc",//nomal=blank,lowest=asc,highest=desc
      listNum:"",
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

  onSort = (listNum,sortType) => {
    switch (sortType) {
      case 'asc':
        listNum.sort((a,b) => {
          const priceA = a.price;
          const priceB = b.price;
      
          let comparison = 0;
          if (priceA > priceB) {
            comparison = 1;
          } else if (priceA < priceB) {
            comparison = -1;
          }
          return comparison;
        });
        break;
      case 'desc':
        listNum.sort((a,b) => {
          const priceA = a.price;
          const priceB = b.price;
      
          let comparison = 0;
          if (priceA > priceB) {
            comparison = -1;
          } else if (priceA < priceB) {
            comparison = 1;
          }
          return comparison;
        })
      case 'normal':
        console.log('default order');
        break;
    }
    this.setState({sortType});
  }

  render(){
    return (
    <div>
    <Navbar itemlist={this.state.products}
            addProduct={this.addProduct}
            removeProduct={this.removeProduct}
            sortType={this.state.sortType}
            listNum={this.state.listNum}
            onSort={this.onSort}
    />
    </div>
  );
}
};

export default App;
