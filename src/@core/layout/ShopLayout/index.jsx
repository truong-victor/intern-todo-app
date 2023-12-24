import React, { useEffect, useState } from 'react';
import { Box, Typography ,Button } from '@mui/material';
import Footer from "./components/Footer";
import Header from "./components/Header"; 
import { Link } from 'react-router-dom';
import { shopProductService } from "./../../../pages/Shop/services/shopProductService";  // Đặt đúng đường dẫn tới shopProductService
import NavBar from './components/NavBar';
import Product from './components/Product';
import { blue } from '@mui/material/colors';
const ShopLayout = (props) => {

  return (
    <Box>
    <Box className="relative flex flex-col"> 
    
      <NavBar/>
    
      <Header />
      <Product/>
    
     
      <Footer />
    </Box>
    </Box>
  );
};

export default ShopLayout;
