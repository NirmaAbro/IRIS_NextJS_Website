import Image from "next/image";
import logo from "../app/logo.jpg";
import React, { useState } from "react";
import Lineicon from "./Lineicon";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isopen, setisopen] = useState(false);
  const [navHeight, setNavHeight] = useState('auto'); // state to handle navbar height

  const handleclickpeople = () => {
    console.log("clickeddd");
  }
  const togglebutton = () => {
    setisopen(!isopen);
    console.log("btn clicked ");
  };

  // Function to handle the height change
  const handleAboutMouseEnter = () => {
    setIsAboutHovered(true);
    setNavHeight('200px'); // Increase the height when hovering "About Us"
  };

  const handleServicesMouseEnter = () => {
    setIsServicesHovered(true);
    setNavHeight('300px'); // Increase the height when hovering "Our Services"
  };

  const handleMouseLeave = () => {
    setIsAboutHovered(false);
    setIsServicesHovered(false);
    setNavHeight('auto'); // Reset height when not hovering
  };

  return (
    <nav className="bg-[#E4EDFD] opacity-80 text-white p-9 pb-1 z-50 sticky top-0 w-full transition-all duration-300" style={{ height: navHeight }}>
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <Image
              src={logo}
              alt="Logo"
              className="ml-5 md:ml-9 mb-2.5 md:mb-1 h-7 w-10 md:h-10 md:w-14 lg:h-16 lg:w-24"
            />
          </div>

          {/* Line icons for mobile */}
          <div className="lg:hidden flex gap-4 text-2xl text-[#8C8C8C]">
            <div className="cursor-pointer text-2xl">
              <FaSearch />
            </div>
            <div onClick={togglebutton}>
              {isopen ? <ImCross /> : <Lineicon />}
            </div>
          </div>

          {/* Menu items */}
          <div className="hidden lg:flex space-x-4">
            <div className="h-20 w-0.5 bg-[#8C8C8C]"></div>
            <div
              className="relative mt-9 pb-1 pl-0 pr-8"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className=" mt-9 text-[#8C8C8C]">
                About <br /> Us
              </a>
              {isAboutHovered && (
                <div className="absolute left-0  top-full mt-2 w-48 rounded">
                  <a href="#" className="block px-4 py-0 text-[#8C8C8C]" >
                    Our People
                  </a>
                  <a href="#" className="block px-4 py-0 text-[#8C8C8C] ">
                    Join our Team
                  </a>
                  {/* <a href="#" className="block px-4 py-0 hover:bg-black">
                    Distance learning Academy
                  </a> */}
                </div>
              )}
            </div>

            <div className="h-20 w-0.5 bg-[#8C8C8C]"></div>
            <div
              className="relative mt-9 pb-1 pl-0 pr-8"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className=" mt-9 text-[#8C8C8C]">
                Our <br /> Gallery
              </a>

              {isServicesHovered && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-[#E4EDFD] rounded">
                  <a href="#" className="block px-4 py-0 text-[#8C8C8C]">
                    Adult Courses
                  </a>
                  <a href="#" className="block px-4 py-0 text-[#8C8C8C]">
                    Apprenticeship
                  </a>
                  <a href="#" className="block px-4 py-0 text-[#8C8C8C]">
                    Commercial Training
                  </a>
                  <a href="#" className="block px-4 py-0 text-[#8C8C8C]">
                    Sector Base
                  </a>
                  <a href="#" className="block px-4 py-0">
                    Fully Funded Digital Skill Training
                  </a>
                  {/* <a href="#" className="block px-4 py-0 hover:bg-black">
                    Carbon Literacy Training
                  </a> */}
                </div>
              )}
            </div>

            <div className="h-20 w-0.5 bg-[#8C8C8C]"></div>
            <a href="/OurCourses" className=" mt-9 pb-1 pl-0 pr-8 text-[#8C8C8C]">
              IT <br /> Services
            </a>
            <div className="h-20 w-0.5 bg-[#8C8C8C]"></div>
            <a href="#" className=" mt-9 pb-1 pl-0 pr-8 text-[#8C8C8C]">
              Education <br /> Services
            </a>
            <div className="h-20 w-0.5 bg-[#8C8C8C]"></div>
            <a href="#" className=" mt-9 pb-1 pl-0 pr-8 text-[#8C8C8C]">
              Research <br /> & Services
            </a>
            <div className="h-20 w-0.5 bg-[#8C8C8C]"></div>
            <a href="#" className=" mt-9 text-[#8C8C8C]">
              Technical <br /> Training
            </a>
            <div className="h-20 w-0.5 bg-[#8C8C8C]"></div>
            <a href="#" className=" mt-16 text-[#8C8C8C]">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
