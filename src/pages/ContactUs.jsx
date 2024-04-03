import React from "react";
import Team from "/Team.png";
import TeamCard from "../components/TeamCard";
import Locations from "../components/Locations";

const ContactUs = () => {
  const teamData = ["All Courses", "Our teams", "Get to know us"];
  return (
    <div>
      <div className=' bg-[url("/Team.png")] min-h-[50vh] p-4'>
        {/* <img src={Team} alt="" /> */}
        <div className=" min-h-[50vh] flex flex-col justify-center items-center">
          <h6 className=" font-bold text-lg text-gray-700">
            Our teams are here to help
          </h6>
          <p>Questions, bug reports, feedback — we’re here for it all.</p>
        </div>
      </div>
      <div className=" flex flex-wrap justify-around items-center min-h-[70vh]">
        {teamData.map((i, index) => (
          <TeamCard key={index} title={i} />
        ))}
      </div>

      <div className=" min-h-[50vh]">
        <Locations/>
      </div>

      <div className=" h-screen w-screen p-10"> 
      <iframe className=" w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.337081781054!2d72.84556637395279!3d19.136716700066113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62c53737d5d%3A0xbb34074bee7b0619!2sAbba%20Residency%2C%20Momin%20Nagar%2C%20Jogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1712125913492!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
