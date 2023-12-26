import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

function CartProvider(props) {
  
  return (
    <CartContext.Provider value={{ ...context }}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
