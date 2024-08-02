"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroCards from "./HeroCards";
import "../globals.css";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="bg-gray-300 via-blue-700  to-blue-300 flex
         md:justify-between w-full h-full text-[#FAAF22] text-shadow-xl py-1 pl-10">
          <div className="my-12 mx-2 w-full h-full">
            <div className="fixed-height  mt-24">
              <TypeAnimation
                sequence={[
                  "fg", 
                  1000, 
                  "Faisal\nGraphics", 
                  2000, 
                  "", 
                  1000, 
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                style={{  display: "inline-block",whiteSpace: "pre-wrap" }}

                className="md:text-[100px] text-6xl font-gandalfel  "
              />
            </div>
            <div className="fixed-height md:mt-56 mt-24 ">
              <TypeAnimation
                sequence={[
                  "Crafting\nDesigning\nCreativite\nTomorrow",
                  
                  2000, 
                  "Customer Satisfaction\nIs Our Prime Concern", 
                  2000,
                  "", 
                  1000, 
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                style={{  display: "inline-block",whiteSpace: "pre-wrap" }}
                className=" mt-4 text-left py-8
                text-[#1E3A8A] uppercase font-extrabold w-full text-3xl md:text-6xl"
              />
            </div>
          </div>
          <HeroCards />
        </div>
      </div>
    </>
  );
};

export default Hero;
