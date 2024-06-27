import React from "react";

interface MyStyleType {
  myStyle: any;
}

const CloseIcon = ({ myStyle }: MyStyleType) => {
  return (
    <button onClick={()=>{console.log("button click")}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-6 font-bold ${myStyle}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default CloseIcon;