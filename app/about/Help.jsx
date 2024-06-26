import React from "react";

const Help = () => {
  return (
    <div className="mt-20 h-auto min-h-[300px] bg-[#4285F4] flex flex-col justify-center items-center p-4 sm:p-8">
      <p className="text-4xl sm:text-5xl text-white font-bold text-center">
        Need Any Help?
      </p>
      <p className="text-lg sm:text-2xl text-white text-center max-w-6xl mt-4 px-4 sm:px-5">
        Here for You: Need any help? Our dedicated team is ready to assist you
        with prompt and personalized support. Reach out, and let's navigate
        solutions together.
      </p>
      <div className="flex items-center w-full max-w-xl sm:max-w-2xl bg-white shadow-lg rounded-full mt-5 px-4 sm:px-8 py-2 sm:py-2 sm:pr-2">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent outline-none px-2 sm:px-4 py-1 sm:py-2"
        />
        <button
          type="button"
          className="bg-[#34A853] text-white font-medium px-5 py-2 rounded-full hover:bg-blue-400 transition duration-150 ease-in-out"
        >
          GET HELP
        </button>
      </div>
    </div>
  );
};

export default Help;
