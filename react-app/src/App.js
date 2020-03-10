import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";
import CartTotal from "./components/cartTotal";

class App extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    // good place to make ajax calls to fetch remote data
    // called 3rd in mounting phase
  }

  componentDidUpdate() {
    // called during update phase along with render
  }

  render() {
    let numProducts = 0;
    if (this.state.products.length > 0) {
      numProducts = this.state.products.filter(p => p.count > 0).length;
    }
    return (
      <div className="jumbotron m-4">
        <h1>Useless shopping cart</h1>
        <CartTotal className="m-2" totalProducts={numProducts} />
        <main className="container m-2">
          <Products
            products={this.state.products}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
          />
        </main>
      </div>
    );
  }

  handleIncrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].count++;
    this.setState({ products });
  };

  handleDecrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].count = Math.max(products[index].count - 1, 0);
    this.setState({ products });
  };

  handleDelete = productId => {
    const products = this.state.products.filter(p => p.id !== productId);
    this.setState({ products });
  };

  handleAdd = () => {
    let products = this.state.products;
    products.push({ id: this.state.products.length + 1, count: 0 });
    this.setState({ products });
  };

  handleReset = () => {
    const products = this.state.products.map(p => {
      p.count = 0;
      return p;
    });
    this.setState({ products });
  };
}

export default App;
