import React from "react";
import BG from "/greyCloud.png";
import BookCard from "../components/BookCard";
import HeroImages from "../components/HeroImages";
import Slider from "../components/Slider";
import Overview from "../components/Overview";
import Services from "../components/Services";
import Prep from "../components/Prep";
import Learning from "../components/Learning";
import Courses from "../components/Courses";
import Management from "../components/Management";
import { FaRegCalendarCheck } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className=' bg-[url("/greyCloud.png")] h-[100vh] flex '>
        <div className=" md:w-1/2 min-h-[70vh]  w-full flex flex-col items-center">
          <h1 className=" text-4xl">Online Education Courses</h1>
          <p className=" text-2xl">"For Everyone"</p>
          <BookCard />
        </div>
        <HeroImages />
      </div>

      <div className=" bg-gradient-to-b from-[#88b4bc] to-white flex flex-col md:flex-row">
        <div className=" md:w-1/2 p-10">
          <Slider />
        </div>
        <div className=" md:w-1/2 p-10">
          <Overview />
        </div>
      </div>

      <div>
        <Services />
      </div>

      <div className=" bg-[#88b4bc] p-4">
        <Prep/>
      </div>

      <div>
        <Learning/>
      </div>
      <div className=" bg-[url('/blueCloud.png')] min-h-screen bg-cover">
        <Courses/>
      </div>

      <div className=" bg-[#34708c] min-h-[70vh] flex justify-center items-center">
        <Management/>
      </div>
     
    </div>
  );
};

export default Home;
