import React, { useState } from 'react';
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CallIcon from '@mui/icons-material/Call';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, ListItemText } from '@mui/material';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

// ... (các import khác)

function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isSubMenuHovered, setIsSubMenuHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

 

  const handleSubMenuMouseEnter = () => {
    setIsSubMenuHovered(true);
  };

  const handleSubMenuMouseLeave = () => {
    setIsSubMenuHovered(false);
  };

  return (
    <Box sx={{ zIndex: 1, position: 'relative', background: '#6699FF', height: '180px' }}>
      <Box display="flex" sx={{ marginLeft: '20px', height: '65%' }} alignItems="center" justifyContent="center" p={2}>
        <TextField
          sx={{ backgroundColor: 'white', width: '500px' }}
          label="Bạn cần tìm gì?"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="#000" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ marginLeft: '30px' }} display="flex" gap={2}>
          <div>
            <DesktopWindowsIcon />
            <Typography variant="caption">Desktop</Typography>
          </div>
          <div>
            <CallIcon />
            <Typography variant="caption">Call</Typography>
          </div>
          <div>
            <NewspaperIcon />
            <Typography variant="caption">Newspaper</Typography>
          </div>
          <div>
            <ShoppingCartIcon />
            <Typography variant="caption">Shopping Cart</Typography>
          </div>
          <div>
            <AccountCircleIcon />
            <Typography variant="caption">Account</Typography>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#6699CC',
          height: '35%',
        }}
      >
        <Box
          sx={{
            width: '230px',
            color: '#6699CC',
            backgroundColor: 'white',
            borderRadius: '5px',
            height: '35px',
            paddingTop: '5px',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MenuIcon sx={{ marginBottom: '5px' }} />
          <Typography variant="caption" sx={{ fontSize: '17px' }}>
            DANH MỤC SẢN PHẨM
          </Typography>
          {isHovered && (
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '5px',
                width: '230px',
                height: '200px',
                color: 'black',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
             
            >
              <List>
                <ListItem>
                  <DesktopWindowsIcon />
                  <ListItemText primary="PC Đồ Họa-Làm Việc" />
                </ListItem>
                <ListItem
                  onMouseEnter={handleSubMenuMouseEnter}
                  onMouseLeave={handleSubMenuMouseLeave}
                >
                  <LaptopChromebookIcon />
                  <ListItemText primary="LapTop-Phụ Kiện" />
                  {isSubMenuHovered && (
                    <Box
                      sx={{
                        backgroundColor: 'blue',
                        borderRadius: '5px',
                        width: '200px',
                        height: '20px',
                        color: 'black',
                      }}
                    >
                      {/* Nội dung danh sách sản phẩm của "LapTop-Phụ Kiện" */}
                    </Box>
                  )}
                </ListItem>
              </List>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;


