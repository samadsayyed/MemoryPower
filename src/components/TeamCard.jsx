import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({title,description}) => {
  return (
    <div className='md:w-1/4 m-4 shadow-lg border-t-[14px] border-orange-500 min-h-[90%] rounded-t-xl justify-around items-center flex flex-col p-4'>
        <h4 className=' text-lg font-semibold'>{title}</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus eros risus, eu blandit purus consectetur et. Phasellus consequat justo sit amet nunc malesuada mattis. Cras eget mi eu odio.
        </p>
        <Link to={"/contact"} className=' text-blue-600 underline'>
        Browse all teams
        </Link>
    </div>
  )
}

export default TeamCard