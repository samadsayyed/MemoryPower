import React from "react";
import OrangeBrain from "/orangeBrain.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Management = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center">
      <div className=" md:w-1/2 h-full flex items-center justify-center p-10">
        <img className=" h-80" src={OrangeBrain} alt="" />
      </div>
      <div className="md:w-1/2 p-10 flex flex-col justify-center items-center h-full gap-y-9 text-white text-lg">
        <p>
          Top 1% teachers selected by an industry-leading 4-step teacher
          assessment process by top 1% of early childhood experts.
        </p>
        <p>
          Memory power follows a rigorous 4-step Selection Process for
          confirming teacher candidates so your childern are taught by the top
          early childhood experts.
        </p>
        <button className=" bg-white text-orange-500 flex rounded-md p-4 items-center justify-center">
          <FaRegCirclePlay />
          Live Comments
        </button>
        <Link to={"/register"}>
        <button className=" bg-white text-orange-500 flex rounded-md p-4 items-center justify-center">
          <FaRegCalendarCheck />
          Book Free Trail
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Management;
