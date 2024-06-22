import React from "react";

const Button = () => {
  return (
    <div className="flex gap-5 justify-between leading-3 tracking-wide ">
      <button className="bg-[#34A853] text-wrap lg:p-3 lg:w-52 lg:text-xl py-2.5 px-3 hover:bg-green-800 text-white font-semibold font-sans gap-1 rounded-full">
        JOB PORTAL
      </button>
      <button className="bg-[#34A853] hover:bg-green-800 py-2.5 px-3 lg:p-3 lg:w-52 lg:text-xl text-white gap-1 font-semibold rounded-full font-sans">
        LOGIN IN LMS
      </button>
    </div>
  );
};

export default Button;
