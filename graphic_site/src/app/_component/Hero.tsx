"use client";
import React from "react";

import { TypeAnimation } from "react-type-animation";
import Typewriter from "typewriter-effect";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen w-full   bg-base-200 ">
        <div className="bg-black flex justify-between  w-full h-full text-white text-shadow-xl py-24 pl-24">
         <div>
          <h1 className="text-5xl font-bold">
            Crafting Creativity, <br></br>Designing Tomorrow
          </h1>

          <p
            className="py-6 mt-2  text-gray-400/95  uppercase  font-semibold w-full mr-12 
          text-4xl  p-2 "
          >
            Customer satisfaction is our prime concern
          </p>
            <button className="btn mr-2 w-[20%]  bg-white">Contact Now</button>
            <button className="btn bg-white w-[20%]">Our Works</button>
            </div>
          <HeroCards />
        </div>
      </div>
    </>
  );
};

export default Hero;

{
  /*     


<TypeAnimation
      sequence={[
        'Crafting Creativity, Designing Tomorrow', // Types 'One'
        // 1000, // Waits 1s
        // 'Two', // Deletes 'One' and types 'Two'
        // 2000, // Waits 2s
        // 'Two Three', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    /> */
}
