import CartItem from "./CartItem"
import { useCartContext } from "../../../@core/provider/CartProvider"
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { getDetailProductService } from "../services/GetDetailProductService";
import { Link } from "react-router-dom";
function CartList(){
    const {cartItems, setIsCheckedAll, isCheckedAll, removeAll}= useCartContext();
    const [productsData, setProductData] = useState([])
    // const [listId,setListId] = useState([])
    // const cartItems = JSON.parse(localStorage.getItem('cart'))
    const listId = cartItems.map(item => item.id)
    const handleCheckedAll = (e)=>{
      setIsCheckedAll(e.target.checked)
      console.log(e.target.checked)
    }

    useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const results = await Promise.all(listId.map(idItem => getDetailProductService.find(idItem)));
        const listData = results.map(item => item?.data);
        const productsData = listData.map((item,index) => {return {...item,purchaseQuantity: cartItems[index]?.purchaseQuantity, checked: cartItems[index]?.checked}})
        setProductData(productsData);      
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchAllProducts();
  }, [cartItems]);
  console.log('cartItems',cartItems);
  console.log(productsData);
    
    
    return (productsData?.length > 0) ?  (
      <div className="w-[80%] m-auto  mb-[30px]">

        <div className="w-full flex justify-between items-center bg-white px-6 py-2 border-b">
          <label htmlFor="checkedItem"> 
            <input checked={isCheckedAll} onChange={handleCheckedAll} type="checkbox" name="" id="checkedItem" /> {' '}Chọn tất cả
          </label>
            <Button onClick={removeAll} sx={{textTransform: 'none'}}  className="h-[30px] hover:text-red-500" variant="outlined" startIcon={<DeleteIcon />}>
              Xóa mục đã chọn
            </Button>
        </div>

        <div className="bg-white p-6">
          {productsData?.map((item, index) => (
            <CartItem productsData={productsData} key={index} item={item} />
          ))}
        </div>
      </div>
    ) : ''
}
export default CartList