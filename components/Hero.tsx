import Image from "next/image";
import bg from "../app/background.png";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";

const Hero = () => {
  let [search, setsearch] = useState("");

  function handlesearchchange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);  //for checking purpose
    setsearch(event.target.value);
  }
  function handleclick() {
    console.log('clicked');
  }

  return (
    <div className="relative h-screen w-full m-0">
      <Image
        src={bg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-x-0 top-0 mx-2.5 flex flex-col items-center justify-center text-center text-white gap-4">
        <h1 className="font-sans font-bold text-xl leading-7 mt-9 text-center 
               sm:text-3xl sm:leading-10 sm:whitespace-nowrap 
               md:font-extrabold md:-tracking-tight md:text-5xl md:leading-10 md:mt-24">
          Empowering Minds, Transforming Futures
        </h1>


        {/* </div> */}


        <h5 className="sm:text-base sm:leading-6 sm:tracking-wider sm:m-2 text-xs md:text-3xl  md:mt-7 md:tracking-wide font-semibold">
          Driving Excellence in IT, Research, and Education for a <br />
          sustainable tomorrow
        </h5>
        {/* //search bar  */}
        <div className="lg:flex bg-white w-58 hidden md;block lg:w-2/3 m-5 rounded-full p-1 lg:px-4 lg:p-1">
          <input
            type="text"
            placeholder="Search Text"
            value={search}
            onChange={handlesearchchange}
            className="rounded-full outline-none px-9 lg:w-full lg:px-2 text-black"
          />
          <FaSearch
            className="cursor-pointer justify-center p-1 text-2xl lg:text-4xl  font-sans items-center rounded-full"
            style={{ backgroundColor: "#4285F4" }}
            onClick={handleclick}
          />
        </div>
        {/* flex 4 item section  */}
        <div className="m-1 md:flex md:gap-2 lg:gap-3 justify-center item-center">
          <div className="my-3 flex md:flex md:gap-2 lg:gap-3 gap-1 leading-5 justify-start items-center mx-6">
            <p className="lg:p-1 lg:text-2xl tracking-widest font-sans text-xs leading-4 font-semibold w-auto whitespace-normal sm:whitespace-nowrap">
              <span className="font-semibold text-sm leading-5">20</span> Research Consultants
            </p>
            <p className="lg:p-1 lg:text-2xl tracking-widest font-sans text-xs leading-4 font-semibold w-auto whitespace-normal sm:whitespace-nowrap">
              <span className="font-semibold text-sm leading-5">70</span> Training Consultants
            </p>
          </div>


          <div className=" my-3 sm:gap-x-3.5 flex md:flex md:gap-2 lg:gap-3 gap-1 leading-5 justify-start items-center mx-3">
            <p className="lg:p-1 lg:text-2xl tracking-widest font-sans text-xs leading-4 font-semibold w-auto whitespace-normal sm:whitespace-nowrap">
              <span className="font-semibold text-sm leading-5">800</span> Research Consultants
            </p>
            <p className="lg:p-1 lg:text-2xl tracking-widest font-sans text-xs leading-4 font-semibold w-auto whitespace-normal sm:whitespace-nowrap">
              <span className="font-semibold text-sm leading-5">100</span> Services
            </p>
            <p className="lg:p-1 lg:text-2xl tracking-widest font-sans text-xs leading-4 font-semibold w-auto whitespace-normal sm:whitespace-nowrap" >
              <span className="font-semibold text-sm leading-5" >45,00</span> Learners
            </p>
          </div>
        </div>
        {/* button  */}
        <div className="m-2 justify-center items-center" >
          <Button />
        </div>


      </div>


    </div >
  );
};

export default Hero;
