import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import MainLogo from "/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-blue-900 text-white">
      <div className=" flex items-center justify-around py-5 bg-orange-500 text-white font-bold flex-col md:flex-row">
        <p className=" text-xl">
          Memory Power is the top coding learning platform for young minds:
        </p>
        <Link to={"/register"}>
        <button className=" flex gap-3 bg-white text-orange-500 p-3 items-center rounded-lg">
          <FaRegCalendarCheck />
          Book A Free Trial
        </button>
        </Link>
      </div>
      <div className=" flex">
        <div className="w-2/5 p-10">
          <img className=" w-1/2 " src={MainLogo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="w-1/5 p-10">
          <h3 className=" underline text-2xl">Important links</h3>
          <ul className=" gap-10 h-full flex flex-col">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/meet-founder"}>
              <li>About Us</li>
            </Link>
            <Link to={"/meet-founder"}>
              <li>Meet Founder</li>
            </Link>
            <Link to={"/"}>
              <li>Our Certificates</li>
            </Link>
          </ul>
        </div>
        <div className="w-1/5 p-10">
          <h3 className=" underline text-2xl">More links</h3>
          <ul className=" gap-10 h-full flex flex-col">
            <li>Careers</li>
            <li>Teacher login</li>
            <li>Student login</li>
            <li>Register now</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
