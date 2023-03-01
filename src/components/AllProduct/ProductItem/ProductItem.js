import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/action/product/actionCreator";

const ProductItem = ({ product }) => {
  const { name, category, image, price, quantity } = product;
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div class="lws-productCard">
      <img
        class="lws-productImage"
        src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
        // {image}
        alt="product"
      />
      <div class="p-4 space-y-2">
        <h4 class="lws-productName">{name}</h4>
        <p class="lws-productCategory">{category}</p>
        <div class="flex items-center justify-between pb-2">
          <p class="productPrice">
            BDT <span class="lws-price">{price}</span>
          </p>
          <p class="productQuantity">
            QTY <span class="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          onClick={() => addToCartHandler(product)}
          class="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
