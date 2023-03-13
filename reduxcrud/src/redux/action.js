import { Add_To_Cart,Remove_From_Cart,Empty_Cart } from "./constant";

const addToCart = (data) => {
  return { type: "Add_To_Cart", data: data };
};

const removeFromCart = (data) => {
  return { type: "Remove_From_Cart", data: data };
};

const emptyCart = () => {
    return { type: "Empty_Cart"};
  };
export { addToCart, removeFromCart,emptyCart };
