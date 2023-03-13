
import {addToCart,removeFromCart,emptyCart} from "../redux/action";
import { useDispatch } from "react-redux";
function Main() {
  const dispatch = useDispatch();
  const product={
    name:"iPhone",
    type:"mobile",
    price:1000,
    color:"red"
  }
  return (
    <div >
      
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(product))}>Remove from Cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      
    </div>
  );
}

export default Main;
