import React, { Component } from "react";

class Product extends Component {
  state = {
    productName: Math.random()
      .toString(36)
      .substr(2, 5)
  };

  componentDidMount() {
    // called 3rd in mounting phase
    console.log(this.state.productName);
  }

  componentDidUpdate(prevProps, prevState) {
    // called during update phase along with render
    if (prevProps.product.count !== this.props.product.count) {
      // make ajax calls to request new data from server
    }
  }

  componentWillUnmount() {
    // can do cleanups here
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.product)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.product)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.product.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <div className="navbar-brand"> {this.getProductName()} </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.props.product;
    return count;
  }

  getProductName() {
    return this.state.productName;
  }
}

export default Product;
