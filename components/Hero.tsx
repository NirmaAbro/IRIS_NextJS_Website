import Image from "next/image";
import bg from "../app/background.png";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={bg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className="text-4xl font-bold mb-4">
          Empowering Minds, Transforming Futures
        </h1>
        <h3 className="text-2xl mb-8">
          Driving Excellence in IT, Research, and Education for a <br />
          sustainable tomorrow
        </h3>
        {/* //search bar  */}
        <div className="flex bg-white p-1 rounded-full w-1/2 ">
          <input
            type="text"
            placeholder="Search Text"
            className="w-full h-11 rounded-xl p-2"
          />
          <FaSearch
            className="cursor-pointer text-5xl p-2 rounded-full"
            style={{ backgroundColor: "#4285F4" }}
          />
        </div>
        <div className="flex gap-16 p-2 mt-8">
          <h3 className="">
            <span className="text-2xl font-bold">20</span> Research Consultants
          </h3>
          <h3 className="">
            <span className="text-2xl font-bold">70</span> Training Consultants
          </h3>
          <h3 className="">
            <span className="text-2xl font-bold">800</span> Research Consultants
          </h3>
          <h3 className="">
            <span className="text-2xl font-bold">100</span> Services
          </h3>
          <h3 className=" ">
            <span className="text-2xl font-bold">45,00</span> Learners
          </h3>
        </div>
        {/* button  */}
        <div >
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
