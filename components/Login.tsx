"use client";
import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";

function Login() {
  const [isMouseHovered, setIsMouseHovered] = useState(false);
  return (
    <div className="lg:flex hidden lg:w-full bg-gray-800 justify-end">
      <div
        className="bg-gray-500 w-1/4 z-50  lg:flex gap-60 pl-2 text-white relative  font-bold"
        onMouseEnter={() => setIsMouseHovered(true)}
        onMouseLeave={() => setIsMouseHovered(false)}
      >
        <div className="font-bold">Login</div>
        <div className="font-bold text-3xl m-auto">
          <RxCaretDown />
        </div>
        {isMouseHovered && (
          <div className="absolute left-0 top-full mt-2 w-80 bg-gray-500 text-white shadow-lg rounded">
            <a href="#" className="block hover:bg-black">
              Adult Courses
            </a>
            <a href="#" className="block hover:bg-black">
              Apprenticeship
            </a>
            <a href="#" className="block hover:bg-black">
              Commercial Training
            </a>
            <a href="#" className="block hover:bg-black">
              Sector Base
            </a>
            <a href="#" className="block hover:bg-black">
              Fully Funded Digital Skill Training
            </a>
            <a href="#" className="block hover:bg-black">
              Carbon Literacy Training
            </a>
          </div>
        )}
      </div>
      <div className="lg:flex gap-1 ml-9 mr-12">
        <div className="text-white text-1xl m-2 cursor-pointer">
          <FaTwitter />
        </div>
        <div className="text-white text-1xl m-2 cursor-pointer">
          <FaFacebookF />
        </div>
        <div className="text-white text-1xl m-2 cursor-pointer">
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
}

export default Login;
