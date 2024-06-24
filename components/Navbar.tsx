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

  const handleclickpeople =()=>{
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
    <nav className="bg-black opacity-80 text-white p-9 z-50 sticky top-0 w-full transition-all duration-300" style={{ height: navHeight }}>
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl">
            <Image
              src={logo}
              alt="Logo"
              className="h-10 w-11 lg:h-16 lg:w-20"
            />
          </div>

          {/* Line icons for mobile */}
          <div className="lg:hidden flex gap-4 text-2xl text-white">
            <div className="cursor-pointer text-2xl">
              <FaSearch />
            </div>
            <div onClick={togglebutton}>
              {isopen ? <ImCross /> : <Lineicon />}
            </div>
          </div>

          {/* Menu items */}
          <div className="hidden lg:flex space-x-4">
            <div className="h-16 w-1 bg-white"></div>
            <div
              className="relative mt-9"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="hover:underline mt-9">
                About Us
              </a>
              {isAboutHovered && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-black text-white shadow-lg rounded">
                  <a href="#" className="block px-4 py-0 hover:bg-black" >
                    Our People
                  </a>
                  <a href="#" className="block px-4 py-0 hover:bg-black">
                    Join our Team
                  </a>
                  <a href="#" className="block px-4 py-0 hover:bg-black">
                    Distance learning Academy
                  </a>
                </div>
              )}
            </div>

            <div className="h-16 w-1 bg-white"></div>
            <div
              className="relative mt-9"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="hover:underline mt-9">
                Our Services
              </a>

              {isServicesHovered && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-black text-white shadow-lg rounded">
                  <a href="#" className="block px-4 py-0 hover:bg-black">
                    Adult Courses
                  </a>
                  <a href="#" className="block px-4 py-0 hover:bg-black">
                    Apprenticeship
                  </a>
                  <a href="#" className="block px-4 py-0 hover:bg-black">
                    Commercial Training
                  </a>
                  <a href="#" className="block px-4 py-0 hover:bg-black">
                    Sector Base
                  </a>
                  <a href="#" className="block px-4 py-0 hover:bg-black">
                    Fully Funded Digital Skill Training
                  </a>
                  <a href="#" className="block px-4 py-0 hover:bg-black">
                    Carbon Literacy Training
                  </a>
                </div>
              )}
            </div>

            <div className="h-16 w-1 bg-white"></div>
            <a href="/OurCourses" className="hover:underline mt-9">
              Our Courses
            </a>
            <div className="h-16 w-1 bg-white"></div>
            <a href="#" className="hover:underline mt-9">
              Online Courses
            </a>
            <div className="h-16 w-1 bg-white"></div>
            <a href="#" className="hover:underline mt-9">
              News and Events
            </a>
            <div className="h-16 w-1 bg-white"></div>
            <a href="#" className="hover:underline mt-9">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
