import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

function CartProvider(props) {
  const [quantityItem, setQuantityItem] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  
  const handleAddToCart = (clickedItem,quantityItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        alert('Da co trong gio hang');
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, quantity: quantityItem }
            : item
        );
      }

      return [...prev, { ...clickedItem, quantity: quantityItem}];
    });
  };

  const context = {
    quantityItem,
    setQuantityItem,
    cartItems,
    handleAddToCart,
    ...props,
  };
  return (
    <CartContext.Provider value={{ ...context }}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
