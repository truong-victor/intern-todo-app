import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthContext } from '../../../provider/AuthProvider';
import AuthProvider from '../../../provider/AuthProvider';

const Header = () => {
  const { user ,logout } = useAuthContext();
  const handleLogout = () => {
    // Kích hoạt hàm logout từ context
    logout();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        
          {/* Sửa đổi ở đây */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button  color="inherit" href='/admin/listproduct'>HOME</Button>
          <Button  color="inherit" onClick={handleLogout}>Logout</Button>
          </Typography>

          <Button color="inherit">{user?.name}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
