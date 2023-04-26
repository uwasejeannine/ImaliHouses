import React from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import logo from "../assets/imalilogo.png";
import NavBtn from "./NavBtn";

const Navbar = () => {
  const buttons = [
    { title: "Properties ", underline: "-bottom-[1.3rem]" },
    { title: "Automobile", underline: "-bottom-[1.3rem]" },
    { title: "Bazaar ", underline: "-bottom-[1.3rem]" },
  ];
  return (
    <div className="bg-white">
      {" "}
      <div className="flex  justify-between  px-4 items-center max-w-[98vw] sm:max-w-[90vw]  lg:max-w-[85vw]  mx-auto whitespace-nowrap">
        {/* Left Menu */}

        <div className=" lg:hidden flex items-center ">
          <FiMenu className="w-7 h-7" />
        </div>
        {/* Mid Logo */}
        <div className="shrink-0 pr-2">
          {/* Logo */}
          <div className=" -my-[0.7rem] ">
            <img alt="1" src={logo} className="w-32  shrink-0" />
          </div>
        </div>
        {/* Links */}
        <div className="hidden lg:flex   ">
          <ul className="flex   space-x-1 items-center  py-6">
            {buttons.map((button) => (
              <NavBtn
                title={button.title}
                border={button.border}
                underline={button.underline}
              />
            ))}
          </ul>
        </div>
        {/* Right Authentication */}
        <div className="flex h-full items-center lg:hidden">
          <div className="w-10 h-10 bg-[#e20112] rounded-full text-white flex items-center justify-center">
            <HiOutlineUser className="text-[28px]" />
          </div>
        </div>

        <div className="hidden lg:flex items-center pl-6 text-[15px]">
          <div className="bg-white border border-green-500 rounded-md px-4 py-2 mr-4">
            <button className="text-green-500 font-bold">Add a property</button>
          </div>
          <button className="mr-4">Help</button>
          <div className=" py-[6px]">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
