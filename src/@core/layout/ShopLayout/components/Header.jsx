import { useCartContext } from '../../../provider/CartProvider';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'mui-image'
import {MenuItem} from '@mui/material';
import {Badge} from '@mui/material';
import { Box } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsIcon from "@mui/icons-material/Notifications";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIcon from '@mui/icons-material/Phone';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';     
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SearchFilter from './filter/SearchFilter';
function Header(){
    const {cartItems} = useCartContext()
    
    const navigate = useNavigate()
    return (
      <Box className="p-3 w-full h-[60px] lg:px-[150px] lg:flex-nowrap flex items-center justify-between bg-[#0f5b99]">
        <MenuIcon sx={{"@media screen and (min-width:1024px)": {display: 'none'}}}/>
          <Image
            fit="contain"
            width={340}
            className="order-1 hover:cursor-pointer"
            src="/images/logo_2023.png"
            alt="Logo"
            onClick={() => {
              navigate("/");
            }}
          />

        <LocationOnIcon
          sx={{display: 'none',"@media screen and (min-width:1024px)": {display: 'block'},}}
          fontSize="large"
          className="order-2 lg:block lg:ml-8 lg:p-[6px] lg:border-white lg:border-2 lg:rounded-full lg:text-white "
        />
         <SearchFilter />
        <IconButton
          onClick={() => {
            navigate("/productList");
          }}
          type="button"
          sx={{ p: "10px", display: 'none ',"@media screen and (min-width:1024px)": {display: 'flex'} }}
          className=" lg:flex-col order-4"
          aria-label="search"
        >
          <ComputerIcon className="text-white" />
          <span className="w-[80px] lg:w-full text-sm lg:text-xs text-white lg:font-medium">
            Xây dựng cấu hình
          </span>
        </IconButton>
        <IconButton
          type="button"
          sx={{ p: "10px", display: 'none',"@media screen and (min-width:1024px)": {display: 'flex'}, }}
          aria-label="search"
          className="lg:flex lg:flex-col order-5"
        >
          <PhoneIcon className="text-white" />
          <span className="text-xs text-white font-medium">
            Khách Hàng Liên Hệ
          </span>
        </IconButton>
        <IconButton
          className="lg:flex lg:flex-col order-6"
          type="button"
          sx={{ p: "10px",display: 'none',"@media screen and (min-width:1024px)": {display: 'flex'}, }}
          aria-label="search"
        >
          <NewspaperIcon className="text-white" />
          <span className="text-xs text-white font-medium">
            Tin Tức Công Nghệ
          </span>
        </IconButton>
        <IconButton
          onClick={() => {
            navigate("/cart");
          }}
          size="large"
          aria-label="show 17 new notifications"
          className="flex flex-col order-7"
        >
          <Badge badgeContent={cartItems?.length} color="error">
            <ShoppingCartIcon className="text-white" />
          </Badge>
          <span className="text-xs text-white font-medium">Giỏ Hàng</span>
        </IconButton>
        <IconButton
          onClick={() => {
            navigate("/login");
          }}
          className="flex flex-col order-8"
          type="button"
          sx={{ p: "10px",display: 'none',"@media screen and (min-width:1024px)": {display: 'flex'}, }}
          aria-label="search"
        >
          <AccountCircleIcon className="text-white" />
          <span className="text-xs text-white font-medium">Tài Khoản</span>
        </IconButton>
      </Box>
    );
}

export default Header