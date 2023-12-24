import React from 'react' ;
import { createContext, useContext, useState } from "react";
import { authService } from "../../pages/Auth/services/authService";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { shopProductService } from "../../../src/pages/Shop/services/shopProductService";
const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);
function CartProvider(props) {
    const [listData, setListData] = useState([]);

  
    const cartDataString = localStorage.getItem("Cart");
    const cartData = JSON.parse(cartDataString);
    console.log("abc", cartData);
    const idsArray = cartData?.map((item) => item.id).filter((id) => id) || [];
    console.log("abc2", idsArray);
    const updateQuantity = (productId, newQuantity) => {
      // Cập nhật số lượng trong local storage
      const updatedCartData = cartData.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    
      // Lưu dữ liệu giỏ hàng đã cập nhật vào local storage
      localStorage.setItem('Cart', JSON.stringify(updatedCartData));
    
      // Kích thích việc render lại bằng cách cập nhật state
      setListData(updatedCartData);
    };
    useEffect(() => {
      if(cartData) {
            const fetchAllProducts = async () => {
              try {
                const results = await Promise.all(idsArray.map(idItem => shopProductService.find(idItem)));
                const productData = results.map(result => result.data);
                console.log('abc3' ,productData) ;
                setListData(productData);
                console.log('All product details:', results);
              } catch (error) {
                console.error('Error fetching product details:', error);
              }
            };
        
         
            fetchAllProducts();
          }
          }, []); 
        console.log('abcbc' , listData);
        
    const context = {
        listData,
        setListData, 
        cartData,
      };
    
  return (
    <CartContext.Provider value={{ ...context }}>
    {props.children}
  </CartContext.Provider>
  )
}

export default CartProvider