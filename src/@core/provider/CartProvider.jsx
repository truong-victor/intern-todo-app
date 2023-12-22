import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

function CartProvider(props) {
  const cartLocal = localStorage.getItem("cart");
  const [cartItems, setCartItems] = useState(
    JSON.parse(cartLocal) ? JSON.parse(cartLocal) : []
  );

  const [totalPrice1, setTotalPrice] = useState(0);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const updateTotalPrice = () => {
    const sumPrice = cartItems
      .filter((item) => item.checked)
      .reduce((totalPrice, item) => {
        return totalPrice + parseInt(item?.purchaseQuantity * item?.salePrice);
      }, 0);
    setTotalPrice(sumPrice);
  };

  const totalPrice = useMemo(() => {
    return cartItems
      .filter((item) => item.checked)
      .reduce((totalPrice, item) => {
        return totalPrice + parseInt(item?.purchaseQuantity * item?.salePrice);
      }, 0);
  }, [JSON.stringify(cartItems)]);
  console.log(
    "🚀 ~ file: CartProvider.jsx:26 ~ totalPrice ~ totalPrice:",
    totalPrice
  );

  const addToCart = (clickedItem) => {
    setCartItems((prev) => [...prev, clickedItem]);
  };

  const removeItem = (id) => {
    const newCartItems = cartItems.filter((item) => item?.id !== id);
    setCartItems(newCartItems);
  };
  const removeAll = () => {
    console.log("test");
    setCartItems([]);
  };

  const toggleCheckedItem = (id) => {
    const newCartItems = cartItems.map((item) =>
      item?.id === id ? { ...item, checked: !item?.checked } : item
    );
    setCartItems(newCartItems);
  };

  const updateCheckedAll = () => {
    const newCartItems = cartItems.map((item) => {
      return { ...item, checked: isCheckedAll };
    });
    setCartItems(newCartItems);

    setCartItems((prev) => {
      return prev.map((item) => ({ ...item, checked: isCheckedAll }));
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(updateTotalPrice, [cartItems]);
  useEffect(updateCheckedAll, [isCheckedAll]);
  const context = {
    cartItems,
    totalPrice,
    isCheckedAll,
    selectedCity,
    setSelectedCity,
    addToCart,
    removeItem,
    removeAll,
    setIsCheckedAll,
    toggleCheckedItem,
    setCartItems,
    ...props,
  };
  return (
    <CartContext.Provider value={{ ...context }}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
