"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutHero from "./AboutHero";
import Who from "./Who";
import Login from "@/components/Login";
import Section3 from "@/components/Section3";
import Choose from "./Choose";
import Video from "./Video";
import Faq from "./Faq";
import Help from "./Help";
import Mission from "./Mission";
import Approach from "./Approach";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        {/* <Login /> */}
        <Navbar />
        <AboutHero />
        <Who />
        <Section3 />
        <Video></Video>
        <Faq></Faq>
        <Help></Help>
        <Mission></Mission>
        <Approach></Approach>
        <Footer></Footer>

        {/* <Choose></Choose> */}
      </div>
    </>
  );
};

export default About;
