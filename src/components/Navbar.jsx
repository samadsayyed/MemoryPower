import MainLogo from "/Logo.png";
import {
  FaHome,
  FaPhoneAlt,
  FaRegCalendarCheck,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { BsCalendar, BsStars } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { VscSymbolClass } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const slider = useRef();

  const handleToggle = () => {
    if (slider.current.classList.contains("translate-x-[100vw]")) {
      slider.current.classList.add("translate-x-[-35vw]");
      slider.current.classList.remove("translate-x-[100vw]");
    } else {
      slider.current.classList.remove("translate-x-[-35vw]");
      slider.current.classList.add("translate-x-[100vw]");
    }
  };

  return (
    <nav className=" flex justify-around items-center p-3 shadow-lg sticky w-full top-0 bg-white z-30">
      <img src={MainLogo} alt="" className=" h-20" />
      <div
        ref={slider}
        className="flex flex-col lg:flex-row  bg-white translate-x-[100vw]  md:h-full md:translate-x-0 duration-1000 md:p-0 top-0 absolute md:static h-screen"
      >
        <ul className=" text-[#6bc4fc] flex flex-col md:flex-row items-center gap-8 text-lg font-semibold ">
          <Link to={"/"} onClick={()=>handleToggle()}>
            <li className=" flex items-center gap-2">
              <FaHome /> Home
            </li>
          </Link>
          <Link to={"/meet-founder"} onClick={()=>handleToggle()}>
            <li className=" flex items-center gap-2">
              <BsStars /> About
            </li>
          </Link>
          <Link to={"/"} onClick={()=>handleToggle()}>
            <li className=" flex items-center gap-2">
              <RiGraduationCapFill /> Courses
            </li>
          </Link>
          <Link to={"/contact"} onClick={()=>handleToggle()}>
            <li className=" flex items-center gap-2">
              <FaPhoneAlt /> Contact Us
            </li>
          </Link>
        </ul>
        <div className=" flex md:flex-row flex-col items-center">
          <button className=" flex h-10 text-[#ff9b56] items-center text-lg gap-1 border-[1px] p-2 rounded-md border-[#ff9b56]">
            <VscSymbolClass /> Join Class
          </button>
          <Link to={"/register"}>
          <button className=" flex h-10 text-[#ff9b56] items-center text-lg gap-1 border-[1px] p-2 rounded-md border-[#ff9b56]">
            <BsCalendar />
            Book A Free Trial
          </button>
          </Link>
        </div>
        <ul className=" flex text-[#fc94d4] gap-4 text-2xl font-semibold items-center">
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
      <GiHamburgerMenu
        className=" absolute top-10 right-5 text-3xl md:hidden"
        onClick={() => handleToggle()}
      />
    </nav>
  );
};

export default Navbar;
