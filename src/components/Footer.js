import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/imalilogo.png";

const Footer = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex flex-col items-center">
      <div style={{ display: "flex" }}>
        <button className="my-2 mx-20" onClick={toggleDropdown}>
          Agent Finder
          <FontAwesomeIcon
            icon={faAngleDown}
            className="ml-2  border-green-500 text-green-500"
          />
        </button>
        <button className="my-4 mx-2" onClick={toggleDropdown}>
          Sales
          <FontAwesomeIcon
            icon={faAngleDown}
            className="ml-2  border-green-500 text-green-500"
          />
        </button>
        <button className="my-4 mx-24" onClick={toggleDropdown}>
          Rentals
          <FontAwesomeIcon
            icon={faAngleDown}
            className="ml-2  border-green-500 text-green-500"
          />
        </button>
        <button className="my-4 mx-26" onClick={toggleDropdown}>
          Home Loans
          <FontAwesomeIcon
            icon={faAngleDown}
            className="ml-2  border-green-500 text-green-500"
          />
        </button>
        <button className="my-4 mx-28" onClick={toggleDropdown}>
          Terms & Condition
          <FontAwesomeIcon
            icon={faAngleDown}
            className="ml-2  border-green-500 text-green-500"
          />
        </button>
      </div>
      {dropdownVisible && (
        <div className="absolute bg-white border border-gray-300 p-2 rounded shadow-md">
          <ul>
            <li>
              <a href="https://www.imali.biz/imaliprivate/announce/list?pg=2">
                Agent Finder
              </a>
            </li>
            <li>
              <a href="https://www.imali.biz/imaliprivate/announce/list?pg=2">
                Sales
              </a>
            </li>
            <li>
              <a href="https://www.imali.biz/imaliprivate/announce/list?pg=2">
                Rentals
              </a>
            </li>
            <li>
              <a href="https://www.imali.biz/imaliprivate/announce/list?pg=2">
                Home Loans
              </a>
            </li>
            <li>
              <a href="https://www.imali.biz/imaliprivate/announce/list?pg=2">
                Terms & Condition
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="bg-white h-[10rem] flex items-center justify-center my-0 mx-0">
        <p>
          The Imali.biz is a group based in Rwanda is dedicated to providing
          real state services to people all over the country. We are constantly
          working to make our website more accessible to everyone, and we
          welcome comments and accommodation requests. If you wish to report an
          issue or seek an accommodation,{" "}
          <span className="text-[#E5AD1D]">please let us know</span>.
        </p>
      </div>
      <div className="flex">
        {/* Logo */}
        <div className="shrink-0 pr-2 ml-auto">
          <img alt="1" src={logo} className="w-32 shrink-0" />
        </div>

        {/* Contact Info */}
        <div className="">
          <p>CONTACTS</p>
          <p>Email: info@imali.biz</p>
          <p>P.O BOX: 500 Kigali-Rwanda</p>
        </div>
        <div className="">
          <p>Follow us on:</p>
          <p>Email: info@imali.biz</p>
          <p>P.O BOX: 500 Kigali-Rwanda</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
