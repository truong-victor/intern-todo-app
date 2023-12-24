import React, { Component } from "react";
import Slider from "react-slick";
import CoreProduct from "./productItem/CoreProduct";

class SwipeToSlide extends Component {
  render() {
    const settings = {
      with: '100px',
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };
    const item = {id: 1, avatar: '/public/images/home/13_Nov65c8fe933bee00be5c1c70f1f3f46085.webp', name: 'fake', price: 1000000, salePrice: 905000}
    return (
      <div >
        <h2> Multiple items </h2>
        <Slider {...settings} className="flex">
          <CoreProduct 
              id={item?.id}
              name={item?.name}
              avatar={item?.avatar}
              price={item?.price}
              salePrice={item?.salePrice}
          />
          <CoreProduct 
              id={item?.id}
              name={item?.name}
              avatar={item?.avatar}
              price={item?.price}
              salePrice={item?.salePrice}
          />
          <CoreProduct 
              id={item?.id}
              name={item?.name}
              avatar={item?.avatar}
              price={item?.price}
              salePrice={item?.salePrice}
          />
              
        </Slider>
        
      </div>
    );
  }
}

const CoreTopProduct = () => {
    const backgroundImageStyle = {
    backgroundImage:
      "url('/images/product/background-category.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
    return (
        <div className="text-center rounded-md" style={backgroundImageStyle}>
            <h1 className="text-white text-2xl">TOP SAN PHAM NOI BAT</h1>
            <SwipeToSlide/>
        </div>
    )
}
export default CoreTopProduct