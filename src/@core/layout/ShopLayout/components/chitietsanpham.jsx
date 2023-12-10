import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { shopProductService } from '../../../../pages/Shop/services/shopProductService';
import NavBar from './NavBar';
import {IconButton} from '@mui/material';
import useLocalStorage from './../hooks/useLocalStorage';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
function ChitietSanpham() {
   const navigate = useNavigate() ; 
  const { id } = useParams();
  const [cart , setCart] = useLocalStorage({
    key: "Cart" ,
    initValue: [{id:id,quantity:1}] ,  
  }) ; 
  const handleAddCart = () => {
    const ProductIndex = cart.findIndex(item => item.id === id);
  
    if (ProductIndex !== -1) {
      // Sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
      const updatedCart = [...cart];
      updatedCart[ProductIndex].quantity += quantity;
        if (updatedCart[ProductIndex].quantity > detailProduct.quantity) {
        // Hiển thị thông báo (toast) nếu số lượng không phù hợp
        toast.error('Số lượng không phù hợp', {
          position: toast.POSITION.TOP_CENTER,
        });
        return; // Dừng thực hiện tiếp theo nếu số lượng không phù hợp
      }
  
      setCart(updatedCart);
    } else {
      const newProduct = {
        id: id,
        quantity: quantity,
      };
        if (newProduct.quantity > detailProduct.quantity) {
        toast.error('Số lượng không phù hợp', {
          position: toast.POSITION.TOP_CENTER,
        });
        return; // Dừng thực hiện tiếp theo nếu số lượng không phù hợp
      }
  
      setCart(prev => [...prev, newProduct]);
    }
  };
  
  console.log(cart)
  const [detailProduct, setDetailProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [listImages, setListImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const fetchDetailProduct = async () => {
      try {
        const result = await shopProductService.find(id);
        setDetailProduct(result.data);
        const parsedListImages = JSON.parse(result.data.listImage);
        setListImages([result.data.avatar, ...parsedListImages]);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchDetailProduct();
  }, [id]);

  return (
    <Box>
      <NavBar />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '40%' }} className='imgProduct'>
          <Box className='imgMain' sx={{ marginLeft: '10px' }}>
            <img src={selectedImage !== null ? selectedImage : detailProduct?.avatar} alt="" />
          </Box>
          <Box className='imgExtra' sx={{ marginTop: '20px', display: 'flex' }}>
            {listImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Extra Image ${index + 1}`}
                style={{
                  marginLeft: '7px',
                  border: '1px solid #C0C0C0',
                  borderRadius: '10px',
                  width: '95px',
                  height: '95px',
                }}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ width: '40%', marginLeft: '20px' }} className='order'>
          <Box className='details'>
            {detailProduct && (
              <>
                <Typography variant="h1" sx={{fontSize:'30px'}}>{detailProduct.name}</Typography>
                <Box
                  sx={{
                    fontFamily: 'inherit',
                    display: 'flex',
                    width: '540px',
                    height: '65px',
                    border: '1px solid #C0C0C0',
                    borderRadius: '10px',
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{ fontSize: '30px', margin: '8px', color: 'red' }}
                  >
                    {detailProduct.price}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: '20px',
                      margin: '10px',
                      marginTop: '15px',
                    }}
                  >
                    <del>{detailProduct.salePrice}đ</del>
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: '15px',
                      color: 'red',
                      margin: '10px',
                      marginTop: '20px',
                    }}
                  >
                    {' '}
                    Tiết kiệm {detailProduct.salePrice - detailProduct.price}đ{' '}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    margin: '20px',
                    alignItems: 'center',
                  }}
                >
                  {detailProduct.quantity && (
                    <Typography variant="h1" sx={{fontSize:'21px'}}>Số Lượng:</Typography>
                  )} 
                       <Box
                    sx={{
                      marginLeft: '10px',
                      fontFamily: 'inherit',
                      display: 'flex',
                      width: '100px',
                      height: '40px',
                      border: '1px solid grey',
                      borderRadius: '10px',
                      padding: '5px 0 0 10px',
                      paddingBottom:'7px'
                    }}
                  >
                    <IconButton
                      onClick={handleDecrement}
                      sx={{ fontSize: '18px', padding: '8px' }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography
                      variant="p"
                      sx={{ fontSize: '18px' }}
                    >
                      {quantity}
                    </Typography>
                    <IconButton
                      onClick={handleIncrement}
                      sx={{ fontSize: '18px' }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>

                  <Box
                    onClick={handleAddCart}
              
                    sx={{
                      marginLeft: '10px',
                      fontFamily: 'inherit',
                      display: 'flex',
                      width: '200px',
                      height: '40px',
                      border: '1px solid #00FFFF',
                      borderRadius: '10px',
                      padding: '5px 0 0 10px',
                      color: '#00FFFF',
                    }}
                  > 
                
                    <ShoppingCartIcon />
                    <Typography variant="p"> 
                      Thêm Vào Giỏ Hàng
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
          <Box className='button' sx={{ margin: '20px' }}>
            <Button
              variant="contained"
              sx={{
                fontFamily: 'inherit',
                width: '540px',
                height: '65px',
                borderRadius: '10px',
                backgroundColor: 'red',
                color: 'white',
              }}
            >
              Đặt Mua Ngay
            </Button>
            <Button
              variant="contained"
              sx={{
                fontFamily: 'inherit',
                width: '265px',
                height: '65px',
                borderRadius: '10px',
                backgroundColor: 'red',
                color: 'white',
                margin: '10px 10px 0 0',
              }}
            >
              Trả Góp Qua Hồ Sơ
            </Button>
            <Button
              variant="contained"
              sx={{
                fontFamily: 'inherit',
                width: '265px',
                height: '65px',
                borderRadius: '10px',
                backgroundColor: 'red',
                color: 'white',
              }}
            >
              Trả Góp Qua Thẻ
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ChitietSanpham;
