import CartItem from "./CartItem"
import { useCartContext } from "../../../@core/provider/CartProvider"
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from "react-router-dom";
function CartList(){
    const {cartItems, setIsCheckedAll, isCheckedAll, removeAll}= useCartContext();
    // const cartItems = JSON.parse(localStorage.getItem('cart'))

    const handleCheckedAll = (e)=>{
      setIsCheckedAll(e.target.checked)
      console.log(e.target.checked)
    }
    useEffect(()=>{
      
    },[cartItems])
    return (cartItems?.length > 0) ?  (
      <div className="w-[80%] m-auto  mb-[30px]">

        <div className="w-full flex justify-between items-center bg-white px-6 py-2 border-b">
          <label htmlFor="checkedItem"> 
            <input checked={isCheckedAll} onChange={handleCheckedAll} type="checkbox" name="" id="checkedItem" /> {' '}Chọn tất cả
          </label>
            <Button onClick={removeAll}  className="h-[40px] hover:text-red-500" variant="outlined" startIcon={<DeleteIcon />}>
              Delete All
            </Button>
        </div>

        <div className="bg-white p-6">
          {cartItems?.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    ) : ''
}
export default CartList