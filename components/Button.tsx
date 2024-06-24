import React from "react";

const Button = () => {
  return (
    <div className="flex gap-4 md:gap-6 lg:gap-8 justify-center items-center">
      <button className="bg-green-500 hover:bg-green-600 py-1 text-sm px-2 md:py-3 md:px-5 lg:py-3 lg:px-6 text-white  md:text-lg lg:text-xl font-semibold font-sans rounded-full shadow-md transition duration-300">
        JOB PORTAL
      </button>
      <button className="bg-green-500 hover:bg-green-600 py-1 text-sm px-2 md:py-3 md:px-5 lg:py-3 lg:px-6 text-white  md:text-lg lg:text-xl font-semibold font-sans rounded-full shadow-md transition duration-300">
        LOGIN IN LMS
      </button>
    </div>
  );
};

export default Button;
