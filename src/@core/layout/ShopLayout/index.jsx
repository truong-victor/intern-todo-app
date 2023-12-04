import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Footer from "./components/Footer";
import Header from "./components/Header"; 
import { Link } from 'react-router-dom';
import { shopProductService } from "./../../../pages/Shop/services/shopProductService";  // Đặt đúng đường dẫn tới shopProductService
import NavBar from './components/NavBar';
const ShopLayout = (props) => {
  const [products, setProducts] = useState([]);
  const [paging, setPaging] = useState({ page: 1, pageSize: 10 });
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // Gọi hàm search và cập nhật state với danh sách sản phẩm
    const fetchData = async () => {
      try {
        const result = await shopProductService.search({
          params: { page: paging.page, pageSize: paging.pageSize },
        });

        // Cập nhật state với danh sách sản phẩm, thông tin phân trang, và tổng số lượng
        setProducts(result.data.dataTable);
        setPaging(result.data.paging);
        setTotalCount(result.data.totalCount);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();  // Gọi hàm fetchData khi component được tạo
  }, [paging.page, paging.pageSize]); 

  return (
    <Box className="relative flex flex-col"> 
      <NavBar/>
      <Header />

      <Box className="flex justify-center flex-wrap">
        {/* Hiển thị danh sách sản phẩm */}
        {products.map((product) => (
          <Box
            key={product.id}
            className="product-item"
            sx={{ margin: '15px', width: '300px', height: '550px', textAlign: 'center', padding: '16px', border: '1px solid #ddd', borderRadius: '8px' }}
          >
            {/* Hiển thị ảnh sản phẩm */}
            <img
              src={product.avatar}
              alt={product.name}
              width="300px"
              height="200px"
              sx={{ maxWidth: '100%', marginBottom: '8px' }}
            />

            {/* Hiển thị tên sản phẩm */}
            <Typography variant="h6" className="product-title" sx={{ marginBottom: '4px' }}>
            <Link to={`/detailProduct/${product.id}`}>
              {product.name}
              </Link>
            </Typography>

            {/* Hiển thị giá và giá giảm nếu có */}
            {product.salePrice && (
              <>
                <Typography className="product-percent-price" sx={{ color: 'red', fontWeight: '600', marginBottom: '4px' }}>
                  Giảm {"10"}%
                </Typography>
                <Typography variant="h6" className="product-price-main" sx={{ fontWeight: '600', color: 'green', textDecoration: 'line-through' }}>
                  {product.price}đ
                </Typography>
                <Typography variant="h6" className="product-price-sale" sx={{ fontWeight: '600', color: 'red' }}>
                  {product.salePrice}đ
                </Typography>
              </>
            )}
            {!product.salePrice && (
              <Typography variant="h6" className="product-price-main" sx={{ fontWeight: '600', color: 'green' }}>
                {product.price}đ
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* Hiển thị thông tin phân trang */}
      <Typography variant="body1" sx={{ marginTop: '10px' }}>
        Page: {paging.page}/{Math.ceil(totalCount / paging.pageSize)}
      </Typography>

      <Footer />
    </Box>
  );
};

export default ShopLayout;
