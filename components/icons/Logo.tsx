import React from "react";
import Image from "next/image";

interface MyStyleType {
  myStyle: string;
  path: any;
}
const Logo = ({myStyle,path } : MyStyleType) => {
  return (
    <Image
      src={path}
      alt="Logo"
      // className={myStyle}
      className="h-7 w-12 md:h-10 md:w-16 lg:h-16 lg:w-28"
    />
  );
};

export default Logo;
