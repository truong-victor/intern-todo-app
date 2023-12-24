

import React, { useEffect, useRef, useState } from 'react';
 import { useCartContext } from '../../../@core/provider/CartProvider';
import { toast } from 'react-toastify';
function CartNumberInput(props) {
  const {setCartItems} = useCartContext()
  const {productsData,newQuantity, setNewQuantity,id,quantity} = props;
  const inputRef = useRef()
    
  const updateQuantity = () =>{
    const newCartItems = productsData?.map((item) => {
      if (item?.id === id) {
        return { ...item, purchaseQuantity: newQuantity };
      }
      return item;
    });
    setCartItems(newCartItems);
  }
  const handleChange = (type) => {
    if(type === "decrement"){
      inputRef.current.value = Math.max(Number(inputRef.current.value) - 1, 1);
      setNewQuantity(Number(inputRef?.current?.value))
    }
    else if(type === "increment"){
      if(newQuantity >= quantity){
          toast.info(`so luong toi da ${quantity}`)
      }else{
        inputRef.current.value =(Number(inputRef.current.value) + 1);
        setNewQuantity(Number(inputRef?.current?.value))
      };
    } 
    else{
      if(Number(inputRef?.current?.value) > quantity){
        toast.info(`so luong toi da ${quantity}`)
        inputRef.current.value=quantity
      }else{
        if(Number(inputRef?.current?.value) >= 1){
          setNewQuantity(Number(inputRef?.current?.value))
        }
      }

    }
  }
  const handleBlur = ()=>{
    if(Number(inputRef?.current?.value) < 1){
      inputRef.current.value = 1
      setNewQuantity(Number(inputRef?.current?.value))
    }
  }

useEffect(updateQuantity, [Number(inputRef?.current?.value)])



  return (
    <div className="custom-number-input h-10 w-32">
      <style>
        {`
          input[type='number']::-webkit-inner-spin-button,
          input[type='number']::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          .custom-number-input input:focus {
            outline: none !important;
          }

          .custom-number-input button:focus {
            outline: none !important;
          }
        `}
      </style>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button onClick={()=> handleChange('decrement')} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          type="number"
          className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
          name="custom-input-number"
          // value={inputValue}
          ref={inputRef}
          defaultValue={newQuantity}
          min={1}
        />
        <button onClick={() => handleChange('increment')} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}

export default CartNumberInput;