import cartReducer from "./reducer/cartReducer";
import productReducer from "./reducer/productReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
