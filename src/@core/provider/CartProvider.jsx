import { ca } from "date-fns/locale";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../../pages/Shop/cart/hooks/useLocalStorage";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

function CartProvider(props) {
  const cartLocal = localStorage.getItem('cart');
  const [cartItems, setCartItems] = useState(JSON.parse(cartLocal)? JSON.parse(cartLocal) : [] );
  const [isCheckedAll, setIsCheckedAll] = useState(false)
  const [selectedCity, setSelectedCity] = useState('')


  // const [cart,setCart] = useLocalStorage()
  
  const totalPrice = useMemo(()=>{
    const sumPrice = cartItems.filter((item) => item.checked).reduce((totalPrice, item) =>{
      return totalPrice + parseInt(item?.purchaseQuantity * item?.salePrice)
    }, 0)
    return sumPrice
  }, [JSON.stringify(cartItems)])


  const addToCart = (clickedItem) => {
    setCartItems((prev) => [...prev, clickedItem]);
  };

  const removeItem = (id)=>{
    console.log('ooo');
    const newCartItems = cartItems.filter(item =>  item?.id !== id)
    setCartItems(newCartItems)
  }
  const removeAll = ()=>{
    setCartItems([])
  }

  console.log('aaa');


  const toggleCheckedItem = (id)=>{
    const newCartItems = cartItems.map(item =>  item?.id === id ? {...item, checked: !item?.checked} : item)
    setCartItems(newCartItems)
  }

  const updateCheckedAll = ()=>{
    setCartItems((prev) => {
      return prev.map((item) => ({ ...item, checked: isCheckedAll }));
    });
  }
  
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [JSON.stringify(cartItems)])

  useEffect(updateCheckedAll, [isCheckedAll])
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
