import { Add_To_Cart,Remove_From_Cart,Empty_Cart } from "./constant";

const cartData = (data = [], action) => {
  // if(action.type==="ADD_TO_CART"){
  //     console.warn(action)
  //     return action.data
  // }else{
  //     return "No Action Matched"
  // }
  switch (action.type) {
    case Add_To_Cart:
      //add to cart logic
      return [action.data, ...data];
    case Remove_From_Cart:
        data.length=data.length-1;
      //remove to cart logic
      return [...data];
    case Empty_Cart:
      //empty cart logic
      data=[]
      return [...data];
    default:
      return data;
  }
};

export default cartData;
