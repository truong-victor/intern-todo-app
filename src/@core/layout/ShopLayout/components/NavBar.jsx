import React, { useState } from 'react';
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CallIcon from '@mui/icons-material/Call';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function NavBar() {
  return (
    <div className="bg-blue-400 w-auto h-20">
<Box display="flex" sx={{ marginLeft: '20px' }} alignItems="center" justifyContent="center" p={2}>
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
</div>
  )
}

export default NavBar