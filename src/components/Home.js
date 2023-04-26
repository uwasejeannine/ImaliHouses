import React from "react";
import houses from "../assets/backgdimg.png";
import { RiSearchLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="h-[25rem] sm:h-[27rem] flex border-green-500 overflow-hidden">
      <div className="absolute  w-full z-20">
        <div className="bg-gray-900/10 absolute z-10 w-full h-[25rem]  "></div>
        <img
          src={houses}
          alt="the backgroundimag"
          className="object-cover w-full  h-[25rem] sm:h-[27rem] "
        />
      </div>
      <div className="relative z-30 flex flex-col items-center w-full pt-12">
        <p className="text-white text-[20px] sm:text-[57px] font-bold">
          Get a home you have been looking for in one sec
        </p>
        <ul className=""></ul>
        {/* Input */}
        <div className="relative mt-9  ">
          <input
            type="search"
            className="bg-white py-4  w-[28rem] sm:w-[37rem] rounded-full pl-5 placeholder:text-gray-500 placeholder:text-[20px] outline-0 "
            placeholder="District, Province, School, City, Zip or Neighborhood"
          />
          <div className="absolute w-[5rem] h-[2.7rem] rounded-full  bg-[#D9D9D9] top-[0.4rem] right-1 flex items-center justify-center">
            <RiSearchLine className="text-white text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
