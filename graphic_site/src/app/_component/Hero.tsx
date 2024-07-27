"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroCards from "./HeroCards";
import "../globals.css";

const Hero = () => {
  return (
    <>
      <div className="hero max-h-screen w-full bg-base-200">
        <div className="bg-gradient-to-tr from-black via-gray-700 to-gray-500 flex justify-between w-full h-full text-white text-shadow-xl py-1 pl-10">
          <div className="my-12 mx-2 w-full h-full">
            {/* <div className="fixed-height"> */}
              <TypeAnimation
                sequence={[
                  "FG", // Types 'FG'
                  1000, // Waits 1 second
                  "Faisal Graphics", // Continues to type 'Faisal Graphics'
                  2000, // Waits 2 seconds
                  "", // Clears the text
                  1000, // Waits 1 second before starting over
                ]}
                wrapper="div"
                cursor={false}
                repeat={Infinity}
                style={{
                  fontSize: "8em",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
                className="text-8xl font-bold"
              />
            {/* </div> */}
            {/* <div className="fixed-height"> */}
              <TypeAnimation
                sequence={[
                  "Crafting Creativity, Designing Tomorrow", // Types 'Crafting Creativity, Designing Tomorrow'
                  2000, // Waits 2 seconds
                  "Customer Satisfaction Is Our Prime Concern", // Types 'Customer Satisfaction Is Our Prime Concern'
                  2000, // Waits 2 seconds
                  "", // Clears the text
                  1000, // Waits 1 second before starting over
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "2em", display: "inline-block" }}
                className="py-6 mt-2 text-left text-gray-400/95 uppercase font-bold w-full text-5xl"
              />
            {/* </div> */}
          </div>
          <HeroCards />
        </div>
      </div>
    </>
  );
};

export default Hero;
