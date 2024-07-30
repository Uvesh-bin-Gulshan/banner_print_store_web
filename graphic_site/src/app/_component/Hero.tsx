"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroCards from "./HeroCards";
import "../globals.css";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="bg-gradient-to-tr from-black via-gray-700 to-gray-500 flex justify-between w-full h-full text-white text-shadow-xl py-1 pl-10">
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

                className="text-[70px] font-gandalfel  "
              />
            </div>
            <div className="fixed-height mt-48 ">
              <TypeAnimation
                sequence={[
                  "Crafting\nCreativity\nDesigning\nTomorrow",
                  
                  2000, 
                  "Customer\nSatisfaction\nIs Our\nPrime Concern", 
                  2000,
                  "", 
                  1000, 
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                style={{  display: "inline-block",whiteSpace: "pre-wrap" }}
                className=" mt-2 text-left py-4
                text-gray-300/95 uppercase font-extrabold w-full  text-4xl"
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
