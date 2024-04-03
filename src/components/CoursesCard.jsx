import React from 'react'
import { FaBrain } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const CoursesCard = ({img,title,description,price}) => {
  return (
    <div className=' md:w-1/4 bg-white p-4 shadow-xl shadow-black flex flex-col items-center'>
        <img src={img} alt={title} />
        <h3 className=' text-xl'>{title}</h3>
        <p>Curriculum Includes</p>
        <p>Sequence, Fundamentals Coding Blocks, Loops</p>
        <p>₹{price}/-</p>
        <button className=' flex items-center justify-center text-orange-500 p-3 m-3 shadow-md w-full'>View Details <FaBrain className=' text-pink-500'/></button>
        <button className=' flex items-center justify-center text-orange-500 p-3 m-3 shadow-md w-full'><FaRegCalendarAlt/>Book Free Trail </button>
    </div>
  )
}

export default CoursesCard