import React from "react";
import Image from "next/image";
import bg from "../background.png";

const GalleryHero = () => {
  return (
    <>
      <div className="relative h-screen bg-cover bg-center">
        <Image
          src={bg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold font-sans">
              OUR GALLERY
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryHero;
