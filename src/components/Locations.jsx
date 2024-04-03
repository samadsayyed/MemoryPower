import React from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";

const Locations = () => {
  return (
    <div className=' flex items-center flex-col md:flex-row p-4'>
        <div className='md:w-1/2 flex flex-col items-center justify-center h-full'>
            <p className=' text-lg'>Contact Us</p>
            <h1 className=' text-3xl font-bold'>Our Locations</h1>
            <p>Come visit our friendly team at one of our offices.</p>
        </div>
        <div className=' md:w-1/2 '>
            <div className=' flex items-center p-6'>
                <FaLocationCrosshairs className=' text-xl m-5'/>
                <div>
                    <p>Mumbai</p>
                    <p>123 Main Street Anytown, Fictional County</p>
                </div>
            </div>
            <div className=' flex items-center p-6'>
                <FaLocationCrosshairs className=' text-xl m-5'/>
                <div>
                    <p>Delhi</p>
                    <p>456 Elm Avenue Dreamville, Fantasy County Magical State, 54321</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations