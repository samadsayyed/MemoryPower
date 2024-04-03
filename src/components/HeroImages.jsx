import React from "react";
import Img1 from "/img1.png";
import Img2 from "/img2.png";
import Img3 from "/img3.png";

const HeroImages = () => {
  return (
    <div className=" w-1/2 min-h-[70vh] md:flex flex-col items-center relative hidden ">
      <div className=" w-1/2">
        <img src={Img2} alt="" className=" min-h-[80%] absolute rounded-3xl z-0" />
        {/* <img src={Img3} alt="" className=" h-[90%] top-0 absolute" /> */}
        <img src={Img1} alt="" className=" h-full  left-0 rounded-3xl" />
      </div>
    </div>
  );
};

export default HeroImages;
