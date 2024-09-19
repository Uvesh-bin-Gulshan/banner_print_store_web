"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroCards from "./HeroCards";
import "../globals.css";

const Hero = () => {
  return (
    <>
      <div className="hero max-h-[60vh] w-full bg-base-200  ">
        <div className="bg-white shadow-xl max-h-[60vh] relative flex
         md:justify-between w-full h-full text-black text-shadow-xl py-1 pl-10">
          <div className="my-12 mx-2 w-full h-full">
            {/* <div className="fixed-height  mt-16">
              <TypeAnimation
                sequence={[
                  "fg", 
                  1000, 
                  "Faisal\nGraphics", 
                  2000, 
                  "ફૈઝલ​\nગ્રાફિક્સ", 
                  1000, 
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                style={{  display: "inline-block",whiteSpace: "pre-wrap" }}

                className="md:text-[100px] text-6xl font-gandalfel  "
              />
            </div> */}
            <div className="fixed-height md:mt-16  absolute">
              <TypeAnimation
                sequence={[
                  "Crafting Designing \nCreative Tomorrow",
                  
                  1000, 
                  "Customer Satisfaction \nIs  Our  Prime Concern", 
                  1000,
                  "", 
                  1000, 
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                style={{  display: "inline-block",whiteSpace: "pre-wrap" }}
                className=" lg:mt-4 mt-8 text-left py-8
                text-black/70 uppercase text-wider
                font-extrabold w-full text-3xl text-justify md:text-5xl"
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
