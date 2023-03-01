import React from "react";
import { useSelector } from "react-redux";
import AddProduct from "../AddProduct/AddProduct";
import ProductItem from "../ProductItem/ProductItem";

const Products = () => {
  const { products } = useSelector((state) => state.product);
  let content;

  if (products.length === 0) {
    content = <h2 className="text-center">No Product found</h2>;
  }

  if (products.length > 0) {
    console.log(products);
    content = products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  }

  return (
    <main class="py-16">
      <div class="productWrapper">
        {/* <!-- products container --> */}
        <div class="productContainer" id="lws-productContainer">
          {/* <!-- product item --> */}
          {content}
        </div>
        <div>
          {/* <!-- Product Input Form --> */}
          <AddProduct />
        </div>
      </div>
    </main>
  );
};

export default Products;
