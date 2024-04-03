import React from "react";
import Logo from "/Logo2.png";

const Form = () => {
  return (
    <div className=" bg-white m-5 md:w-1/3 flex justify-around flex-col items-center p-8 rounded-3xl">
      <img src={Logo} className=" md:w-1/3" alt="" />
      <h2 className=" text-4xl font-semibold">Book Your Free Class</h2>
      <form action="">
        <div className="relative mb-4">
          <label for="full-name" className="leading-7 text-sm text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            placeholder="Enter your Full name"
            name="full-name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label for="tel" className="leading-7 text-sm text-gray-600">
            Phone
          </label>
          <input
            type="tel"
            id="email"
            placeholder="Enter your Phone"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <p>By clicking the 'Schedule a FREE Class' button you agree to Whitehat Jr Terms & Conditions.</p>
        <button className=" p-3 bg-blue-700 rounded-lg text-white m-4">REGISTER</button>
        <p>Already have account ?</p>
      </form>
    </div>
  );
};

export default Form;
