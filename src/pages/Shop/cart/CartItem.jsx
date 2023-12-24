import React, { useState } from 'react';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Navigate } from 'react-router';
import CartNumberInput from './CartNumberInput';
import { useCartContext } from '../../../@core/provider/CartProvider';
function CartItem(props){
    const {removeItem, toggleCheckedItem} = useCartContext();
    const {item,productsData} = props;
    const [newQuantity, setNewQuantity] = useState((item?.purchaseQuantity > item?.quantity) ? item?.quantity : item?.purchaseQuantity);
    
    const handleRemove = ()=>{
      removeItem(item?.id);
    }

    const handleCheckedItem =() =>{
      toggleCheckedItem(item?.id)
    }
    return (
      <div className="py-[18px] flex justify-between border-b-[1px] border-gray-500">
        <input type="checkbox" onChange={handleCheckedItem} checked={item?.checked}/>
      <img className="w-[120px]" src={item?.avatar} alt=""/>
        <h2 className="w-1/2 px-[30px]">{item?.name}</h2>
        <div className="w-[140px]">
          <CartNumberInput productsData={productsData} id={item?.id} newQuantity={newQuantity} quantity={item?.quantity} setNewQuantity={setNewQuantity} purchaseQuantity = {item?.purchaseQuantity}/>
          {/* <input min={1} step={1} type="number" defaultValue={item.purchaseQuantity} onChange={(e) => handleNewQuantity(e)}/> */}
        </div>
        <div className="w-[200px] flex flex-col items-end justify-between left_cartItem">
          <div>
            <p className="text-[red] font-bold">
              {(item?.salePrice * (newQuantity ? newQuantity : item?.purchaseQuantity)).toLocaleString() }
            </p>
            <p className="line-through text-[grey]">
              {item?.price?.toLocaleString()}
            </p>
          </div>
          <DeleteOutlineIcon onClick={handleRemove} className="bg-[#e2dede] rounded-full hover:bg-[#db5d5d] hover:text-white" />
        </div>
      </div>
    );
}
export default React.memo(CartItem)