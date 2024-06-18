import Image from "next/image";
import bg from "../app/background.png";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

const Hero = () => {
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
      <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-2xl font-bold mt-10 lg:text-5xl">
          Empowering Minds, Transforming Futures
        </h1>
        <h5 className="lg:text-2xl lg:m-2">
          Driving Excellence in IT, Research, and Education for a <br />
          sustainable tomorrow
        </h5>
        {/* //search bar  */}
        <div className="flex bg-white w-58 lg:w-2/3 m-5 rounded-full p-1 lg:px-4 lg:p-1">
          <input
            type="text"
            placeholder="Search Text"
            className="rounded-full px-9 lg:w-full lg:px-2"
          />
          <FaSearch
            className="cursor-pointer justify-center p-1 text-2xl lg:text-4xl  font-sans items-center rounded-full"
            style={{ backgroundColor: "#4285F4" }}
          />
        </div>
        {/* flex 4 item section  */}
        <div className="m-1 md:flex md:gap-2 lg:gap-3  ">
          <div className="flex gap-5 md:flex md:gap-2 lg:gap-3">
            <p className="lg:p-1 lg:text-2xl m-2">
              <span className="">20</span> Research Consultants
            </p>
            <p className="lg:p-1 lg:text-2xl ">
              <span className="">70</span> Training Consultants
            </p>
          </div>

          <div className="flex gap-2 md:flex md:gap-2 lg:gap-3">
            <p className="lg:p-1 lg:text-2xl ">
              <span className="">800</span> Research Consultants
            </p>
            <p className="lg:p-1 lg:text-2xl ">
              <span className="">100</span> Services
            </p>
            <p className="lg:p-1 lg:text-2xl ">
              <span className="">45,00</span> Learners
            </p>
          </div>
        </div>
        {/* button  */}
        <div className="m-2 justify-center items-center" >
          <Button />
        </div>


      </div>


    </div>
  );
};

export default Hero;
