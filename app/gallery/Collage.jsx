"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../logo.jpg";
import { data } from "./data.js";

const Collage = () => {
  // const initialImages = Array(9).fill({ logo }); // Replace with actual image paths or URLs
  // const [images, setImages] = useState(initialImages);

  // const loadMoreImages = () => {
  //   setImages((prevImages) => [
  //     ...prevImages,
  //     ...Array(9).fill({ logo }), // Load more images
  //   ]);
  // };
  const [visibleImages, setVisibleImages] = useState(8);

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 8);
  };
  const boxStyle =
    "bg-[#D9D9D9] border-2 rounded-sm p-2 flex flex-col items-center justify-center";
  return (
    <>
      <div className="container mx-auto px-4 py-8 mb-28 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4 my-10">
          {data.slice(0, visibleImages).map((item, i) => (
            <div
              key={i}
              className={`${boxStyle} ${
                i === 0 || i === 7
                  ? "md:col-span-2 md:row-span-2 grid-cols-1 grid-rows-1"
                  : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
        {visibleImages < data.length && (
          <div className="text-center">
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-full"
              onClick={loadMoreImages}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Collage;
