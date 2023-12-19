import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { dataDigitalBestSeller } from "./data";
import "./Carousel.css"


export default function Carousel() {

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
  
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return(
      <>
   <div className="App">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={ item.linkImg
                }
                alt=""
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
      </>
    );
}