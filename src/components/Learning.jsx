import React from "react";
import { GiThink } from "react-icons/gi";
import { PiTreeStructureLight } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { IoLayersOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const Learning = () => {
  return (
    <div className=' bg-[url("/child.jpg")] bg-blend-multiply bg-pink-900/100 min-h-[70vh] bg-cover text-white flex justify-around items-center flex-col'>
      <h1 className=" text-4xl"> Your child will learn</h1>
      <p>
        The Memory power that good questions drive good answers. Whether it's a
        query about the world around us or a challenge.
      </p>
      <div className=" flex flex-col md:flex-row w-full justify-around">
        <div className=" flex flex-col items-center">
          <GiThink className=" text-8xl text-center bg-gray-700 p-2 rounded-full"/>
          <p className="text-center">Logics</p>
        </div>
        <div className=" flex flex-col items-center">
          <PiTreeStructureLight className="  text-8xl text-center bg-gray-700 p-2 rounded-full" />
          <p className="text-center">Structure</p>
        </div>
        <div className=" flex flex-col items-center">
          <IoBulbOutline className="  text-8xl text-center bg-gray-700 p-2 rounded-full" />
          <p className="text-center">Creative Thinking</p>
        </div>
        <div className=" flex flex-col items-center">
          <IoLayersOutline  className="  text-8xl text-center bg-gray-700 p-2 rounded-full"/>
          <p className="text-center">Sequencing</p>
        </div>
        <div className=" flex flex-col items-center">
          <IoIosSettings className="  text-8xl text-center bg-gray-700 p-2 rounded-full" />
          <p className="text-center">Algorithmic Thinking</p>
        </div>
      </div>
    </div>
  );
};

export default Learning;
