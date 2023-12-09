import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

function CartProvider(props) {
  const cartLocal = localStorage.getItem('cart')
  const [cartItems, setCartItems] = useState(JSON.parse(cartLocal));
  console.log(cartItems);
  
  const addToCart = (clickedItem) => {
    setCartItems((prev) => [...prev, clickedItem]);
  };

  

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [JSON.stringify(cartItems)])

  const context = {
    // quantityItem,
    // setQuantityItem,
    cartItems,
    setCartItems,
    addToCart,
    ...props,
  };
  return (
    <CartContext.Provider value={{ ...context }}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
