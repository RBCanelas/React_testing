import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  componentDidMount() {
    // called 3rd in mounting phase
  }

  componentDidUpdate() {
    // called during update phase along with render
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
        <button
          onClick={this.props.onAdd}
          className="btn btn-primary btn-sm m-2"
        >
          Add
        </button>
        {this.props.products.map(product => (
          <Product
            key={product.id}
            product={product}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Products;
