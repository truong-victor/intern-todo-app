import React, { useContext, createContext, useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";


const CartContext = createContext()

export const useCart = () => useContext(CartContext);

const CartProvider = (props) => {
  const getLocalStorage = JSON.parse(localStorage.getItem('item11'))

  const [cart, setCart] = useState(getLocalStorage?? []);
  console.log("cart12", cart)
  const[loading, setLoading] = useState(false);
  const[total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const addToCart = item => {
    console.log("item19", item)
      setCart((prev) => (
        [...prev, item]
      ));
  };


  const quantityInCart = (index) => {
    if(cart[index] != []) {
      let total = 0 ;
      if(cart[index]?.quantity < cart[index]?.data?.quantity){
        total = cart[index]?.quantity
        setQuantity(total);
      }else{
        total = cart[index]?.data?.quantity
        setQuantity(total)
      }
    }
  }

  useEffect(()=>{
    localStorage.setItem('item11', JSON.stringify(cart))
  }, [JSON.stringify(cart)]);

  const updateCart = (id, newQuantity) => { 
      setCart(prev => prev.map((item) => {
        if(item?.data?.id === id ){
          return{...item, quantity: newQuantity}
        }
        
        return item;
      }))
  };

  const increaseCartNumber = (index) => {
    if(cart[index]?.quantity < cart[index]?.data?.quantity){
      const getLocalStorage = JSON.parse(localStorage.getItem('item11'))
      getLocalStorage[index] = {
        ...getLocalStorage[index],
        quantity : ++getLocalStorage[index].quantity
      }
      setCart(getLocalStorage);
    }
    else{
      alert("There is not enough quantity in stock as you requested");
    }

  };

  const reduceCartNumber = (index) => {
      console.log("index39", index)
      console.log("quantity", cart[index]?.quantity)
      if(1<cart[index]?.quantity ){
        const getLocalStorage = JSON.parse(localStorage.getItem('item11'))
        getLocalStorage[index] = {
          ...getLocalStorage[index],
          quantity : --(getLocalStorage[index].quantity)
        }
        setCart(getLocalStorage);
      }
      else{
        alert("The smallest quantity is 1");
      }
  };

  const handleRemove = (index) => {
        const getLocalStorage = JSON.parse(localStorage.getItem('item11'));
        if(confirm("Are you sure you want to remove this item")){ 
          getLocalStorage.splice(index,1)
        }
        localStorage.setItem("item11", JSON.stringify(getLocalStorage));
        setLoading(true);
        setCart(getLocalStorage )
        setTimeout(() => {
            setLoading(false)
        } , 1000)
  };

  const handleDeleteAll = () => {
    setCart([])
  };

  useEffect(() => {
    if(cart != []){
      let total = 0 
      for(let i = 0; i< cart?.length; i++){
        total += cart[i]?.quantity * cart[i]?.data?.salePrice
      }
      setTotal(total);
    }
  });



  const context = {
    addToCart, 
    handleRemove,
    handleDeleteAll,
    cart,
    setCart,
    loading,
    setLoading,
    getLocalStorage,
    updateCart,
    increaseCartNumber,
    reduceCartNumber,
    total,
    setTotal,
    quantity,
    setQuantity,
    quantityInCart,
    ...props,
  };

  return(
    <CartContext.Provider value={{...context}}>
      {props.children}
    </CartContext.Provider>
  );

}

export default CartProvider;