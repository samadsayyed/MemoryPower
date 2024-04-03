import React from "react";
import ExperienceImg from "/experience.png";

const Experience = () => {
  return (
    <div className=" flex flex-col md:flex-row p-4">
      <div className=" md:w-1/2">
        <img src={ExperienceImg} alt="" />
      </div>
      <div className=" md:w-1/2 flex flex-col justify-center gap-10">
        <h4 className=" text-xl font-bold">We Provide You a Comfortable Learning Experience</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          iaculis elit. Ut eu purus vitae turpis commodo dictum at.
        </p>
        <p>You work in a comfortable seat</p>
        <p>In-Depth Explanation</p>
        <p>Motivation and Accountability</p>
      </div>
    </div>
  );
};

export default Experience;
