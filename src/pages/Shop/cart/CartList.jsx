import CartItem from "./CartItem"
import { useCartContext } from "../../../@core/provider/CartProvider"
import { useEffect } from "react";

import { Link } from "react-router-dom";
function CartList(){
    // const {cartItems}= useCartContext();
    const cartItems = JSON.parse(localStorage.getItem('cart'))
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])
    return (cartItems.length > 0) ?  (
      <div className="w-[80%] m-auto  mb-[30px]">
        
        <div className="bg-white p-6">
          {cartItems?.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    ) : ''
}
export default CartList