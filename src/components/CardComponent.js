import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const CardComponent = ({ photo, price }) => {
  return (
    <div className="min-w-[22rem] shadow-lg rounded-[0.3rem]">
      {/*Image */}
      <div className="relative">
        <img src={photo} alt="description" className="rounded-t-[0.3rem]" />
        <div className=" absolute top-0 bottom-0 text-white right-0 text-[40px] ">
          <AiOutlineHeart />
        </div>
      </div>
      {/*Description*/}
      <div className=" mt-5  ml-6  text-[15px] pb-2">
        <p>Single Family Home</p>
        <p className="text -[22px] font-bold">{price}</p>
        <div className=" space-x-2">
          <div className="flex ">
            <span className="font-bold pr-2">5</span>bed
            <span className="font-bold pr-2">3</span>bath
            <span>3,747 </span>sqft
            <span>8,655 sqft lot </span>
            <p>2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
