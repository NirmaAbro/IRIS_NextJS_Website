import React from "react";

const Button = () => {
  return (
    <div className="flex gap-5 justify-between">
      <button className="bg-green-500 text-wrap lg:p-3 lg:w-52 lg:text-xl p-2 hover:bg-green-600 text-white font-bold  rounded-full">
        JOB PORTAL
      </button>
      <button className="bg-green-500 hover:bg-green-600 p-2 lg:p-3 lg:w-52 lg:text-xl text-white font-bold rounded-full">
        LOGIN IN LMS
      </button>
    </div>
  );
};

export default Button;
