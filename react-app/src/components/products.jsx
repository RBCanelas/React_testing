import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  componentDidMount() {
    // called 3rd in mounting phase
    console.log("Counters - componentDidMount");
  }

  componentDidUpdate() {
    // called during update phase along with render
    console.log("Counters - componentDidUpdate");
  }

  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.products.map(product => (
          <Product
            key={product.id}
            product={product}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Products;
