import React from "react";
import Image from "next/image";
import icon1 from "../app/icon1.png";
import icon2 from "../app/icon2.png";
import icon3 from "../app/icon3.png";
import arrow from "../app/arroww.png";

function Section3() {
  return (
    <>
      {/* Centered text */}
      <div className="text-center lg:mt-32 justify-center m-10 ">
        <h1 className="text-2xl md:text-4xl  font-bold ">
          WHY CHOOSE <span className="text-blue-600">US</span>
        </h1>
      </div>
      <div className="justify-center lg:flex m-7 items-center h-3/4">
        {/* first div with image */}
        <div className="flex flex-col  justify-center items-center mb-4 text-center z-10">
          <div className="h-16 w-16 flex lg:flex-row  justify-center m-4 items-center bg-[#4285F4] rounded-full">
            <Image
              src={icon1}
              alt="Icon 1"
              className="text-white "
              width={40}
              height={30}
              objectFit="contain"
            />
          </div>
          <h5 className="text-xl font-bold mb-2">
            Elevate Learning Experiences
          </h5>
          <p className="text-base">
            Harness the transformative power of motivation to enhance
            educational outcomes
          </p>
        </div>

        {/* Second div with image */}
        <div className="flex flex-col justify-center items-center mb-4 text-center z-10">
          <div className="h-16 w-16 flex  justify-center m-4 items-center bg-[#4285F4] rounded-full">
            <Image
              src={icon2}
              alt="Icon 1"
              className="text-white"
              width={40}
              height={30}
              objectFit="contain"
            />
          </div>
          <h5 className="text-xl font-bold mb-2">
            Elevate Learning Experiences
          </h5>
          <p className="text-base">
            Harness the transformative power of motivation to enhance
            educational outcomes
          </p>
        </div>
        {/* third div with image */}
        <div className="flex flex-col justify-center items-center mb-4 text-center z-10">
          <div className="h-16 w-16 flex  justify-center m-4 items-center bg-[#4285F4] rounded-full">
            <Image
              src={icon3}
              alt="Icon 1"
              className="text-white"
              width={40}
              height={30}
              objectFit="contain"
            />
          </div>
          <h5 className="text-xl font-bold mb-2">
            Elevate Learning Experiences
          </h5>
          <p className="text-base">
            Harness the transformative power of motivation to enhance
            educational outcomes
          </p>
        </div>
      </div>
    </>
  );
}

export default Section3;
