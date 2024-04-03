import React, { useState } from "react";

const Overview = () => {
  const [view, setView] = useState("Overview");
  return (
    <div>
      <div className=" border-b-[1px] border-neutral-800 flex gap-5  font-semibold">
        <h1
          className={`text-2xl p-3 ${
            view == "Overview" ? " border-b-4 border-b-blue-500" : "border-none"
          }`}
          onClick={() => setView("Overview")}
        >
          Overview
        </h1>
        <h1
          className={`text-2xl p-3 ${
            view == "OurVision"
              ? " border-b-4 border-b-blue-500"
              : "border-none"
          }`}
          onClick={() => setView("OurVision")}
        >
          Our Vision
        </h1>
      </div>
      <div className=" py-3 text-lg flex">
        {view == "Overview" ? (
          <p className=" w-full text-lg">
            “THE MEMORY POWER” is an EdTech startup company that equips students
            with the skillset and mindset required to be the future of the
            companies worldwide. We connect a deep understanding of education
            with the power of the “21st CENTURY LIFE SKILLS” to make your child
            ready to face this competitive and challenging world.
            <br />
            <br />
            The universe is a subject created in the minds of humans addressed
            by the facts and theories since centuries. To think about it in
            detail requires the strength of knowledge and experience which are
            used to lead an intellectual life.
          </p>
        ) : (
          <p className=" w-full text-lg">
            To help your child enhance the understanding of life based on the
            core concept of the most powerful tool in the world - “THE MEMORY
            POWER”.
            <br />
            <br />
            “Memory Power” is an art of practicing the life skills that will
            provide your children with the important tools for the development
            of brain, such as deep thinking, making new friends, decision making
            and taking actions in situations where their parents or teachers are
            not around to help.
          </p>
        )}
      </div>
    </div>
  );
};

export default Overview;
