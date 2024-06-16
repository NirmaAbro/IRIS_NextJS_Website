"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Login from "@/components/Login";
import Section2 from "@/components/Section2";

function Home() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Login />
        <Navbar />
      </div>
      <div>
        <Hero />
        <Section2 />

      </div>
    </>
  );
}

export default Home;
