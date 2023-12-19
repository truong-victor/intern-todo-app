import React, { useState } from "react";

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import LanIcon from '@mui/icons-material/Lan';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import MouseIcon from '@mui/icons-material/Mouse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import {Badge} from '@mui/material';


import Logo from "./img/logo_2023.png"
import "./header.css"
import { useCart } from "../../../../@core/provider/CartProvider";



import { Link, useNavigate } from "react-router-dom";

export default function Layout(){

    const { cart, setCart } = useCart();
    console.log("cartHeader", cart);

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    
    
    return(
        <>
            <div className="w-full flex bg-blue-800 p-[2px] md:p-3">
                <div>
                    <Link to="/home"><img  id="img" src={Logo} /></Link>
                </div>
                <div>
                    <FmdGoodIcon className="ml-4 mt-2" id="location"/>
                </div>
                <div className="input">
                        <input className="ml-6 mt-1 rounded w-96 h-9" type="text" placeholder="Bạn cần tìm gì?" />
                        <button><SearchIcon/></button>
                </div>
                <div className="ml-6">
                    <HorizontalSplitIcon className="ml-10" id="build"/>
                    <p className="ml-1" >Xây dựng cấu hình</p>
                </div>
                <div  className="ml-6">
                    <LocalPhoneIcon className="ml-10" id="phone"/>
                    <p className="ml-1">Khách hàng liên hệ</p>
                </div>

                <div  className="ml-6">
                    <NewspaperIcon className="ml-10" id="new"/>
                    <p lassName="ml-1">Tin tức công nghệ</p>
                </div>
                
                <div  className="ml-6" onClick={() => navigate('/home/cart')}>
                    <Badge badgeContent={cart?.length} color="error">
                        <AddShoppingCartIcon className="ml-4" id="cart"/>
                    </Badge>
                    <p className="ml-1.5" >Giỏ hàng</p>
                </div>
                <div  className="ml-8">
                    <AccountCircleIcon className="ml-4" id="account"/>
                    <p className="ml-1">Tài khoản</p>
                </div>
            </div>

            <div className="w-full flex bg-sky-700 p-[2px] md:p-3" id="headertwo">
                <div className="bg-white" id="listproduct">
                    <div className="ml-2">
                        <DehazeIcon id="bar"/>
                        <span className="listproduct">Danh mục sản phẩm</span>
                    </div>
                </div>

                    <div className="menu">
                       <div><LaptopMacIcon id="icon_menu"/>Laptop<ArrowDropDownIcon id="prev"/></div>

                    </div>

                    <div className="menu">

                        <div><DeveloperBoardIcon id="icon_menu"/>PC<ArrowDropDownIcon id="prev"/></div>
                    </div>

                    <div className="menu">
                        <div><LanIcon id="icon_menu"/>Linh kiện PC<ArrowDropDownIcon id="prev"/></div>

                    </div>

                    <div className="menu">

                        <div><DesktopMacIcon id="icon_menu"/>Màn hình<ArrowDropDownIcon id="prev"/></div>

                    </div>

                    <div className="menu">
                        <div><MouseIcon id="icon_menu"/>Phím chuột ghế gear <ArrowDropDownIcon id="prev"/></div>

                    </div>

                    <div className="menu">
                        <div><LocalPrintshopIcon id="icon_menu"/>Thiết bị văn phòng<ArrowDropDownIcon id="prev"/></div>
                        
                    </div>

                    <div className="menu">
                        <div><ImportantDevicesIcon id="icon_menu"/>Phòng nét - quán nét<ArrowDropDownIcon id="prev"/></div>

                    </div>
            </div>


        </>
    );
}