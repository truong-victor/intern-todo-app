import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';
import {IconButton} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';
import { useCartContext} from '../../../../../src/@core/provider/CartProvider';
import NavBar from './NavBar';
import DeleteIcon from '@mui/icons-material/Delete';
function CartItem() {
  const {listData ,setListData} = useCartContext() ;
  // const [listData, setListData] = useState([]);
  console.log('ancnc',listData);
  const cartDataString = localStorage.getItem('Cart');
const cartData = JSON.parse(cartDataString);
console.log('abc', cartData);
const idsArray = cartData?.map(item => item.id).filter(id => id) || [];
console.log('abc2', idsArray);



const handleIncrementCartItem = (cartItem) => {
  const product = listData.find(item => String(item.id) === String(cartItem.id));

  if (product && cartItem.quantity < product.quantity) {
    const updatedCart = cartData.map(item =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    localStorage.setItem('Cart', JSON.stringify(updatedCart));
    setListData(prevListData =>
      prevListData.map(item =>
        item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  } else {
    toast.error('Số lượng không phù hợp', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

const handleDecrementCartItem = (cartItem) => {
  const product = listData.find(item => String(item.id) === String(cartItem.id));

  if (product && cartItem.quantity > 1) {
    const updatedCart = cartData.map(item =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
    );

    localStorage.setItem('Cart', JSON.stringify(updatedCart));
    setListData(prevListData =>
      prevListData.map(item =>
        item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }
};
let quantities = [] ;
if (cartData) {
quantities = cartData.map(item => item.quantity)
}

useEffect(() =>{

},[quantities])



const handleRemoveItem = (id) => {

  const updatedCart = cartData.filter(item => String(item.id) !== String(id));
  localStorage.setItem('Cart', JSON.stringify(updatedCart));
  setListData(updatedCart);

};
const totalAmount = listData.reduce((total, product) => {

  console.log('567rh', cartData) ;
  console.log('jfjfjjf' , String(product.id));
const cartItem = cartData.find(item => String(item.id) === String(product.id));

  if (cartItem) {
    total += cartItem.quantity * product.salePrice;
  }

  return total;
}, 0);
const handleDeleteAll = () => {
  
  localStorage.removeItem('Cart');

 
  setListData([]);
};
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'salePrice', headerName: 'Sale Price', width: 130 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 150,
      renderCell: (params) => <img src={params.value} alt="Avatar" style={{ width: '100%', height: 'auto' }} />,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 130,
      renderCell: (params) => {
        const cartItem = cartData.find(item => String(item.id) === String(params.row.id));
        const currentQuantity = cartItem ? cartItem.quantity : 0;

        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <IconButton
              onClick={() => handleDecrementCartItem(cartItem)}
              sx={{ fontSize: '18px', padding: '8px' }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography variant="p" sx={{ fontSize: '18px', marginRight: '5px' }}>
              {currentQuantity}
            </Typography>
            <IconButton
              onClick={() => handleIncrementCartItem(cartItem)}
              sx={{ fontSize: '18px' }}
            >
              <AddIcon />
            </IconButton>
          </Box>
        );
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box>
             <Button
            variant="contained"
            onClick={() => handleRemoveItem(String(params.row.id))}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      ),
    },
    ];

    return (
      <> 
        <NavBar/>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '20px' }}>
    
          {/* Thêm nút hoặc bất kỳ thành phần điều hướng hoặc thêm mới nếu cần */}
        </Box>
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
              rows={listData}
              columns={columns}
              pageSize={10}
              pagination
              pageSizeOptions={[5, 10, 25, 50, 100]}
              checkboxSelection
            />
              <Typography>Tổng tiền:{totalAmount}</Typography>
              <Button variant="contained" href='./thanhtoan'>Thanh Toán</Button>
        </div>
      
      </>
    );
  }

export default CartItem;
