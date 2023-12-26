import Image from 'mui-image'
import { Box } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIcon from '@mui/icons-material/Phone';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';     
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import useLocalStorage from '../../../../pages/Shop/hook/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import SearchInput from './search/SearchInput';
function Header(){
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cart] = useLocalStorage({
        key: 'Cart',
        initValue: [],
    });
    useEffect(() => {
        setCartItemCount(cart.length);
  }, [cart]);
  const navigate = useNavigate();
    return(
        <Box className="w-full h-[60px] px-[150px] flex items-center justify-between bg-[#0F5B99]" >
                <Image fit='contain'
                width={170} className='' src="/images/logo_2023.png" alt="Logo" 
                onClick={() => {
                navigate("/");
                }}/>
            <LocationOnIcon fontSize='large' className='ml-8 p-[6px] border-white border-2 rounded-full text-white '/>
            {/* <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 430, height: 40, marginLeft: '10px' }}>
                <InputBase
                    sx={{ ml: 1, flex: 1, }}
                    placeholder="Bạn muốn tìm gì"
                    // inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper> */}
            <SearchInput/>
            <IconButton className='flex flex-col' type="button" sx={{ p: '10px' }} aria-label="search">
                    <ComputerIcon className='text-white' />
                    <span className='text-xs text-white font-medium'>Xây dựng cấu hình</span>
            </IconButton>
            <IconButton className='flex flex-col' type="button" sx={{ p: '10px' }} aria-label="search">
                    <PhoneIcon className='text-white' />
                    <span className='text-xs text-white font-medium'>Khách Hàng Liên Hệ</span>
            </IconButton>
            <IconButton className='flex flex-col' type="button" sx={{ p: '10px' }} aria-label="search">
                    <NewspaperIcon className='text-white' />
                    <span className='text-xs text-white font-medium'>Tin Tức Công Nghệ</span>
            </IconButton>
            <Link to={`/cart`}>
                <IconButton className='flex flex-col' type="button" sx={{ p: '10px' }} aria-label="search">
                    <Badge badgeContent={cartItemCount} color="primary">
                        <ShoppingCartIcon className='text-white' />
                    </Badge>
                    <span className='text-xs text-white font-medium'>Giỏ Hàng</span>
                </IconButton>
            </Link>           
            <IconButton className='flex flex-col' type="button" sx={{ p: '10px' }} aria-label="search">
                    <AccountCircleIcon className='text-white' />
                    <span className='text-xs text-white font-medium'>Tài Khoản</span>
            </IconButton>
        </Box>
    )
}

export default Header