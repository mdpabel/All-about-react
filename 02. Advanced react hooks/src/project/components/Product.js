import React from "react";

const Product = () => {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="card-content">
        <p className="card-title">
          jallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>
        <div className="card-footer">
          <a className="card-btn" href="/">
            Details
          </a>
          <div className="card-price">$99.99</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
