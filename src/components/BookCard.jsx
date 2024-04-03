import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className=" shadow-2xl md:w-[35vw] m-6 bg-white h-96 p-3 rounded-3xl items-center flex flex-col justify-around">
      <p className=" text-2xl">Book your free class now</p>
      <p className=" text-[#757d85]">
        Select your child's grade/class in school
      </p>
      <table className=" w-full">
        <tbody>
          <tr>
            {arr.map((value, index) => (
              <td
                key={index}
                className=" border-[1px] items-center justify-center hover:bg-[#fc8c1c] hover:text-white duration-500"
              >
                <div className=" text-center">Class</div>
                <div className=" text-center">{value}</div>
              </td>
            ))}
          </tr>
          <tr>
            {arr.map((value, index) => (
              <td
                key={index}
                className=" border-[1px] items-center justify-center hover:bg-[#fc8c1c] hover:text-white duration-500"
              >
                <div className=" text-center">Class</div>
                <div className=" text-center">{value + 6}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <Link to={"/register"}>
        <button className=" text-white p-3 px-7 text-lg font-bold bg-[#98bc14] rounded-xl flex items-center gap-2 hover:bg-[#1565c0] ease-out duration-500">
          <FaRegCalendarAlt />
          Schedule a FREE Class
        </button>
      </Link>
    </div>
  );
};

export default BookCard;
