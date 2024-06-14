import React from "react";

const Button = () => {
  return (
    <div className="flex gap-5 justify-between m-6">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-11 rounded-full">
        JOB PORTAL
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-11 rounded-full">
        Login in LMS
      </button>
    </div>
  );
};

export default Button;
