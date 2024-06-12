"use client";

import Image from "next/image";
import logo from "../app/logo.png";
import React, { useState } from "react";

function Navbar() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  return (
    <nav className="bg-black opacity-50 text-white p-9 mt-4 ">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <div className="text-xl ">
            <Image src={logo} alt="Logo" width={300} height={300} />
          </div>

          <div className="hidden md:flex space-x-4">
            <div className="h-16 w-1 bg-white"></div>
            <a href="#" className="hover:underline ">
              About Us
            </a>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <a href="#" className="hover:underline">
                {" "}
                Our Services
              </a>
              {isServicesHovered && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-black  text-white shadow-lg rounded">
                  <a href="#" className="block px-4 py-2 hover:bg-black0">
                    Adult Courses
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-black">
                    Apprenticeship
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-black">
                    Commercial Training
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-black">
                    Sector Base
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-black">
                    Fully Funded Digital Skill Training
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-black">
                    Carbon Literacy Training
                  </a>
                </div>
              )}
            </div>
            {/* <a href="/Services" className="hover:underline">
              Services
            </a> */}
            <a href="/OurCourses" className="hover:underline">
              Our Courses
            </a>
            <a href="#" className="hover:underline">
              Online Courses
            </a>
            <a href="#" className="hover:underline">
              News and Events
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
