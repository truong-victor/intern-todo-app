import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getDetailProductService } from '../services/GetDetailProductService';
import { Box, Button, Typography } from '@mui/material';
import {IconButton} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';
export { CartIteam };
function CartIteam() {

  const [listData, setListData] = useState([]);
  const cartDataString = localStorage.getItem('Cart');
  const cartData = JSON.parse(cartDataString);
  console.log('abc', cartData);
  const idsArray = cartData.map(item => item.id).filter(id => id);
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        // Sử dụng Promise.all để gọi nhiều API đồng thời
        const results = await Promise.all(idsArray.map(idItem => getDetailProductService.find(idItem)));
        // Xử lý kết quả, nếu cần
        const productData = results.map(result => result.data);
        setListData(productData);      
        console.log('All product details:', results);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    // Gọi hàm fetchAllProducts
    fetchAllProducts();
  }, []);
console.log('567cm',listData);
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
    toast.error('Số lượng không phù hợp ok', {
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

const handleRemoveItem = (id) => {
  // Xóa sản phẩm có id tương ứng từ giỏ hàn
  const updatedCart = cartData.filter(item => String(item.id) !== String(id));
  // Cập nhật localStorage
  localStorage.setItem('Cart', JSON.stringify(updatedCart));
  // Cập nhật state để render lại component
  setListData(updatedCart);
};
const totalAmount = listData.reduce((total, product) => {
  const cartItem = cartData.find(item => String(item.id) === String(product.id));
  // Đảm bảo sản phẩm có trong giỏ hàng trước khi tính toán
  if (cartItem) {
    total += cartItem.quantity * product.salePrice;
  }
  return total;
}, 0);
const handleDeleteAll = () => {
  // Xóa toàn bộ dữ liệu trong localStorage
  localStorage.removeItem('Cart');
  // Cập nhật state để render lại component
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
            color="error"
            onClick={() => handleRemoveItem(String(params.row.id))}

          >
            Delete
          </Button>
        </Box>
      ),
    },
    ];

    return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '20px' }}>
    
          {/* Thêm nút hoặc bất kỳ thành phần điều hướng hoặc thêm mới nếu cần */}
          
        </Box>
        <div style={{ height: 'aoto', width: '100%' }}>
            <DataGrid
              rows={listData}
              columns={columns}
              // pageSize={10}
              pagination
              pageSizeOptions={[5, 10, 25, 50, 100]}
              checkboxSelection
            />
              <Typography>Tổng tiền:{totalAmount}</Typography>
              {/* <Button
          variant="contained"
          color="error"
onClick={handleDeleteAll} 
        >
          DeleteAll
        </Button> */}
        </div>
      
      </>
    );
  }

export default CartIteam;