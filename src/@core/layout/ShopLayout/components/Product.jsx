import React, { useEffect, useState } from 'react';
import { Box, Typography, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { shopProductService } from './../../../../pages/Shop/services/shopProductService';

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [paging, setPaging] = useState({ page: 1, pageSize: 5 });
  const [totalPages, setTotalPages] = useState(0);
  const fetchData = async () => {
    try {
      const result = await shopProductService.search({
        params: { page: paging.page, pageSize: paging.pageSize },
      });

      setProducts(result.data.dataTable);
      setPaging(result.data.paging);
      console.log('test' , result.data) ;
      setTotalPages(Math.floor(result.data.totalCount / paging.pageSize) + 1);
      console.log('abcbcb' , paging);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handlePageClick =  () => { } ;

  useEffect(() => {
    fetchData();
  }, [paging.page, paging.pageSize]);
  const handleChangePage = (_, page) => {
    setPaging((prev) => ({ ...prev, page }));
  };

console.log('567', totalPages) ;
  return (
    <Box>
    <Box className="flex justify-center flex-wrap" sx={{marginTop:'10px' , textAlign:'center'}}>
      
  {products.map((product) => (
    <div key={product.id} className=" border border-grey-400" style={{width:'250px' }}>
      <img  style={{ aspectRatio: '1 / 1', width: '230px', paddingLeft:'20px' }}  src={product.avatar} alt={product.name} />
      <a href={`/detailProduct/${product.id}`}>
        <h2>{product.name}</h2>
      </a>
      <p className="text-[#575757] line-through text-[14px] font-400">{product.price}</p>
      <h3 className="font-700 text-[20px] text-[#be1f2d] font-sans-serif">{product.salePrice}</h3>
    </div>
  ))}
  <div className="w-full mt-4 flex justify-center">
    <Pagination count={totalPages} onChange={handleChangePage} />
  </div>
  </Box>
  </Box>


  );
};

export default Product;
