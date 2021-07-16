import React from "react";

import ProductsFilter from "./Products-filter";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="sidebar">
        <ProductsFilter />
      </div>
      <div className="products">
        <Product />
      </div>
    </>
  );
};

export default Products;
