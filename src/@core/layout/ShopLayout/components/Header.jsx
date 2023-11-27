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
function Header(){
    return(
        <Box className="w-full h-[60px] px-[150px] flex items-center justify-between bg-[#0f5b99]" >
            <Image fit='contain' width={170} className='' src="/images/logo_2023.png" alt="Logo" />
            <LocationOnIcon fontSize='large' className='ml-8 p-[6px] border-white border-2 rounded-full text-white '/>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 430, height: 40, marginLeft: '10px' }}>
                <InputBase
                    sx={{ ml: 1, flex: 1, }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
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
            <IconButton className='flex flex-col' type="button" sx={{ p: '10px' }} aria-label="search">
                    <ShoppingCartIcon className='text-white' />
                    <span className='text-xs text-white font-medium'>Giỏ Hàng</span>
            </IconButton>
            <IconButton className='flex flex-col' type="button" sx={{ p: '10px' }} aria-label="search">
                    <AccountCircleIcon className='text-white' />
                    <span className='text-xs text-white font-medium'>Tài Khoản</span>
            </IconButton>
                    


        </Box>
    )
}

export default Header