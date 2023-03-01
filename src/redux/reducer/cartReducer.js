import { ADD_TO_CART } from "../action/product/actionType";

const initialState = {
  cart: [],
  add: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // cart quantity decrement
      if (action.payload.quantity === 0) {
        const newCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
