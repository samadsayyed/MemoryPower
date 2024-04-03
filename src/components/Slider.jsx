import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slider1 from "/slider1.png";
import Slider2 from "/slider2.png";
import Slider3 from "/slider3.png";

const Slider = () => {
  const SliderImages = [Slider1, Slider2, Slider3];

  return (
    <Carousel autoPlay interval={1500} infiniteLoop showStatus={false}>
      {SliderImages.map((value, index) => (
        <div key={index}>
          <img src={value} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
