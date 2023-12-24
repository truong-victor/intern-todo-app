
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
import { PiComputerTower } from "react-icons/pi";
import { useState , useEffect } from 'react';
import {  Button, Typography } from '@mui/material';
import { useCartContext} from '../../../../../src/@core/provider/CartProvider';
function NavBar(){
  const {cartData} = useCartContext() ;
    const navigate = useNavigate() ; 
    const [searchProduct, searchList] = useState({
      searchText:"",
      searchResult : [] , 
    }) ;
    
    

    const [cartItemCount, setCartItemCount] = useState(0);
    let quantities = [] ;
    if (cartData) {
    quantities = cartData.map(item => item.quantity)
    }
 
   
  useEffect(() => {
    const cartDataString = localStorage.getItem('Cart');
    const cartData = JSON.parse(cartDataString);
    const totalItems = cartData ? cartData.reduce((acc, item) => acc + item.quantity, 0) : 0;
    setCartItemCount(totalItems);
    if (cartData) {    
     
    }
  }, [quantities]); 

    return (
      <Box className="p-3 w-full h-[60px] lg:px-[150px] lg:flex-nowrap flex items-center justify-between bg-[#0f5b99]">
        <MenuIcon sx={{"@media screen and (min-width:1024px)": {display: 'none'}}}/>
          <Image
            fit="contain"
            width={340}
            className="order-1 hover:cursor-pointer"
            src="./../../../../../public/logo_2023.png"
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
        <Paper
          component="form"
          sx={{
            display:"none",
            p: "2px 4px",
            alignItems: "center",
            width: '100%',
            height: 40,
            order: 8,
            "@media screen and (min-width:1024px)": {order: 3, display: 'flex'},
          }}
          className='w-[430px] lg:ml-2'
        >
          <InputBase
            sx={{ ml: 1, flex: 1, }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} 
          aria-label="search"
          value={searchProduct}
           onChange={(e) => setSearchText(e.target.value)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        <IconButton
          type="button"
          sx={{ marginLeft:'10px' , p: "10px", display: 'none ',"@media screen and (min-width:1024px)": {display: 'flex'} }}
          className=" lg:flex-col order-4"
          aria-label="search"
        >
          <PiComputerTower className="text-white" />
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
            navigate("/cartitem");
          }}
          size="large"
          aria-label="show 17 new notifications"
          className="flex flex-col order-7"
        >
        
        <ShoppingCartIcon className="text-white" />
      {cartItemCount > 0 && (
        <span className="text-xs text-white font-medium absolute bg-red-500 rounded-full px-2" style={{marginBottom:'45px' , marginLeft:'30px'}}>
          {cartItemCount}
        </span>
      )}
           <span className="text-xs text-white font-medium">
            Giỏ Hàng
          </span>
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


export default NavBar;


