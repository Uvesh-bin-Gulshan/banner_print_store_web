"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroCards from "./HeroCards";
import "../globals.css";

const Hero = () => {
  return (
    <>
      <div className="hero max-h-[100vh] w-full bg-base-200  ">
        <div className="bg-white shadow-xl min-h-screen relative  md:flex
         md:justify-between w-full h-full text-black text-shadow-xl py-1 pl-10">
          <div className=" mx-2 w-full h-full">
            {/* <div className="fixed-height  mt-16">
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
            </div> */}
            <div className="fixed-height md:mt-[35vh] mt-[28vh]  absolute">
              <TypeAnimation
                sequence={[
                  "Crafting \nDesigning \nCreative \nTomorrow",
                  
                  1000, 
                  "Customer \nSatisfaction \nIs  Our  \nPrime Concern", 
                  1000,
                  "", 
                  1000, 
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                style={{  display: "inline-block",whiteSpace: "pre-wrap" }}
                className=" lg:mt-8 mt-8 text-left py-4
                text-black/70 uppercase text-wider
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
