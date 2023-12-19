import React from "react";
import Carousel from "./Carousel/Carousel";

import "./navbar.css"
import Banner from "./img/banner.webp"



const NavBar = () => {
    return(
        <>
             <div className="banner">
                <img i src={Banner} id="banner"  />
            </div>
            <div>
                <Carousel/>
            </div>
        </>
    );
}

export default NavBar