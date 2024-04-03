import React, { useRef } from "react";
import F1A from "/founders/founder-1a.png"
import F1B from "/founders/founder-1b.png"
import F2A from "/founders/founder-2a.png"
import F2B from "/founders/founder-2b.png"

const Founders = () => {

 

  return (
    <div className=" flex w-full items-center flex-col md:flex-row bg-[#e4f4fc] py-10">
      <div className=" md:w-1/2 flex flex-col justify-center p-10 gap-y-5">
        <p className=" text-xl font-semibold">Meet our Founders</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          congue quam. Nullam in aliquam urna. Cras scelerisque ultrices
          laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce vitae congue quam. Nullam in aliquam urna. Cras scelerisque
          ultrices laoreet.
        </p>
        <p className=" text-blue-900 underline">Find your people, your answers, your path to growth</p>
      </div>
      <div className=" md:w-1/2 flex md:flex-row flex-col  justify-around">
        <div>
            <div>
                <img  className=" w-48" src={F1A} alt=""  />
            </div>
            <div className=" gap-y-5">
                <p className=" text-lg font-semibold">Sophia Patel</p>
                <p>CO-FOUNDER & CO-CEO</p>
            </div>
        </div>
        <div>
            <div>
                <img className=" w-48" src={F2A} alt=""  />
            </div>
            <div className=" gap-y-5">
                <p className=" text-lg font-semibold">Benjamin Harrison</p>
                <p>Chairman</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
