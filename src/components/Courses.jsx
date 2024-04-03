import React from 'react'
import CoursesCard from './CoursesCard'

const Courses = () => {

    const coursesData = [
        {
            title:"FUNDAMENTAL OF MEMORY",
            img:"/course/course1.jpeg",
            price:9599
        },
        {
            title:"COMPREHENSIVE MEMORY",
            img:"/course/course2.jpeg",
            price:49999
        },
        {
            title:"PANAROMIC MEMORY",
            img:"/course/course3.jpeg",
            price:135999
        },
    ]

  return (
    <div className=' p-10'>
        <h1>Our Courses</h1>
        <div className='flex justify-around items-center flex-wrap'>
            {
                coursesData.map((i,index)=>(
                    <CoursesCard img={i.img} title={i.title} price={i.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default Courses