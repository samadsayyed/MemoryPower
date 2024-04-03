import React from 'react'
import { Link } from 'react-router-dom'

const ServicesCard = ({img,title,description}) => {
  return (
    <div className='  md:w-1/4 p-3 m-1 bg-white shadow-lg flex justify-center items-center'>
        <img className='w-1/3 h-28' src={img} alt="" />
        <div className=' items-center justify-center flex flex-col p-2 text-justify'>

        <h3 className=' text-xl my-2 text-blue-950'>{title}</h3>
        <p>{description}</p>
        <Link to={"/register"}>
        <button className=' text-white p-1 px-4 text-md font-semibold bg-[#98bc14] rounded-xl flex items-center gap-2 hover:bg-[#1565c0] ease-out duration-500'>Book Free Trial Class</button>
        </Link>
        </div>
    </div>
  )
}

export default ServicesCard