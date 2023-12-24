import React, { useState, useEffect } from 'react';
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CallIcon from '@mui/icons-material/Call';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Header = () => {
  const imageList = [
    '../../../../../public/anh1.jpg',
    '/../../../../../public/anh2.jpg',
    '../../../../../public/anh3.jpg',
    '../../../../../public/anh4.jpg',
    // Thêm các đường dẫn ảnh khác nếu cần
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const moveLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imageList.length - 1));
  };

  const moveRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < imageList.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveRight();
    }, 2000); 

    return () => clearInterval(intervalId);
  }, [currentImageIndex]); 

  return (
    <div className="header">
      <img src="../../../../../public/12345.jpg" alt="Your Image" style={{ borderRadius:'10px', marginLeft:'10%', width: '80%', height: '50%' }} />
      <Box sx={{ marginLeft:'145px', display: 'flex', gap: '10px', position: 'relative', overflow: 'hidden' }}>
        <img src={imageList[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ borderRadius:'10px', width: '608px', height: '173px' }} />
        <img src={imageList[(currentImageIndex + 1) % imageList.length]} alt={`Image ${currentImageIndex + 2}`} style={{ borderRadius:'10px', width: '608px', height: '173px' }} />
        <div style={{ position: 'absolute', top: 0, left: '5%', width: '80%', height: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={moveLeft}><KeyboardArrowLeftIcon sx={{backgroundColor:'#C0C0C0'}} /></button>
          <button onClick={moveRight}><ChevronRightIcon sx={{backgroundColor:'#C0C0C0'}}/></button>
        </div>
      </Box>
    </div>
  );
};

export default Header;
