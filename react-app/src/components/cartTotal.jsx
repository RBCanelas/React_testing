import React from "react";

const CartTotal = props => {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="navbar-brand">
          Total Items{" "}
          <span className="badge badge-pill badge-info">
            {props.totalProducts}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default CartTotal;
