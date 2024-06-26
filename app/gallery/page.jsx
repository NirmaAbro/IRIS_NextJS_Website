"use client";
import React from "react";

import Navbar from "@/components/Navbar";
import GalleryHero from "./GalleryHero";
import Collage from "./Collage";
import Footer from "../about/Footer";

const Gallery = () => {
  return (
    <>
      <Navbar></Navbar>
      <GalleryHero></GalleryHero>
      <Collage />
      <Footer></Footer>
    </>
  );
};

export default Gallery;
