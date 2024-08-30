"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroCards from "./HeroCards";
import "../globals.css";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen w-full bg-base-200  ">
        <div className="bg-blue-800 via-blue-700 relative  to-blue-300 flex
         md:justify-between w-full h-full text-[#FAAF22] text-shadow-xl py-1 pl-10">
          <div className="my-12 mx-2 w-full h-full">
            <div className="fixed-height  mt-16">
              <TypeAnimation
                sequence={[
                  "fg", 
                  1000, 
                  "Faisal\nGraphics", 
                  2000, 
                  "ફૈસલ​\nગ્રાફિક્સ", 
                  1000, 
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                style={{  display: "inline-block",whiteSpace: "pre-wrap" }}

                className="md:text-[100px] text-6xl font-gandalfel  "
              />
            </div>
            <div className="fixed-height md:mt-56 mt-28 absolute">
              <TypeAnimation
                sequence={[
                  "Crafting\nDesigning\nCreativite\nTomorrow.",
                  
                  1000, 
                  "Customer\nSatisfaction\nIs  Our  Prime\nConcern.", 
                  1000,
                  "", 
                  1000, 
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                style={{  display: "inline-block",whiteSpace: "pre-wrap" }}
                className=" lg:mt-4 mt-8 text-left py-8
                text-blue-300 uppercase 
                font-extrabold w-full text-3xl text-justify md:text-6xl"
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
