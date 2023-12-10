import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { shopProductService } from '../../../../../src/pages/Shop/services/shopProductService';
import {Button} from '@mui/material';
function CartItem() {

  const [listData, setListData] = useState([]);
  const cartDataString = localStorage.getItem('Cart');
  const cartData = JSON.parse(cartDataString);
  console.log('abc', cartData);
  const idsArray = cartData.map(item => item.id).filter(id => id);
  

  
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        // Sử dụng Promise.all để gọi nhiều API đồng thời
        const results = await Promise.all(idsArray.map(idItem => shopProductService.find(idItem)));
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
console.log(listData);
const handleRemoveItem = (id) => {
  // Xóa sản phẩm có id tương ứng từ giỏ hàng
  const updatedCart = cartData.filter(item => String(item.id) !== String(id));

  // Cập nhật localStorage
  localStorage.setItem('Cart', JSON.stringify(updatedCart));

  // Cập nhật state để render lại component
  setListData(updatedCart);
  window.location.reload();

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
      width: 120,
      renderCell: (params) => {
        const cartItem = cartData.find(item => String(item.id) === String(params.row.id));
        return cartItem ? cartItem.quantity : 0; // Lấy quantity từ cartItem
    
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
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
              rows={listData}
              columns={columns}
              pageSize={10}
              pagination
              pageSizeOptions={[5, 10, 25, 50, 100]}
              checkboxSelection
            />
        </div>
      </>
    );
  }

export default CartItem;
