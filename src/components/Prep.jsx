import React from "react";
import Bars from "/bars.png";

const Prep = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-evenly">
      <img src={Bars} alt="" className="w-2/5 md:w-1/5" />
      <div className=" md:w-3/5">
        <h1 className=" text-3xl py-2 border-b-2 border-black">
          How do we prepare our kids for the better future ?
        </h1>
        <p>
          Here is a better way to build the mindsets of our kids to lead
          businesses of the future. This course has been carefully designed to
          enrich students with the skills needed for them to thrive as creative
          thinkers, great leaders, public speakers and leading life like
          “Entrepreneurs”.
          <br />
          <br />
          Each module of the course contains fun & engaging assignments that
          help our students learn the subject matter better through practical
          implementation. This also helps schools and parents assess improvement
          and see tangible results of the student’s learning.
        </p>
      </div>
    </div>
  );
};

export default Prep;
