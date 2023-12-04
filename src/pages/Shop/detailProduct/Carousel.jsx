import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { list } from "postcss";
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      arrows: false
    };
    const { listImage } = this.props;
    return (
      <div>
        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {listImage.map((img, index) => (
            <div key={index} className="w-full h-auto p-[8px] text-center">
              <img
                key={index}
                src={img}
                className="w-full h-auto m-auto bg-[red] "
                alt=""
              />
            </div>
          ))}
        </Slider>
        <Slider
          {...settings}
          className="mt-[30px] w-full"
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={listImage.length}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {listImage.map((img, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px]  p-[8px] text-center image"
            >
              <img
                key={index}
                src={img}
                className="m-auto h-full rounded-xl  bg-[red] border border-gey-700 hover:border-blue-500"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
