"use client";
import { AnyARecord } from "dns";
import { Bokor, Cardo } from "next/font/google";
import { title } from "process";
import React, { useState } from "react";

const CategoryRight = ({ cardData, cardDetail, className }: any) => {
  const [hoverId, setHoverId] = useState("1");
  const handleHover = (id: string) => {
    setHoverId(id);
  };
  return (
    <>
      <section className={`flex m-12 my-32 justify-between gap-8 ${className}`}>

        <div className='w-[70%] h-full bg-white rounded-xl p-6'>
          {cardDetail.map((detail:any) => (
            <div key={detail.id}>
              {hoverId === detail.id && (
                <div className='flex h-full mx-4 items-center justify-between'>
                  <div className='relative h-full w-[50%] 
                  flex justify-center  items-center'>
                    <img
                      src={detail.image}
                      alt={detail.title}
                      className='w-64 h-56 object-cover  rounded-lg shadow-md transition-transform transform hover:scale-105'
                    />
                    
                  </div>
                  <div className='h-full ml-4 w-[50%]'>
                    <h2 className='text-xl font-bold mb-4'>{detail.title}</h2>
                    <p className='text-gray-700 mb-4'>{detail.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='bg-white rounded-xl py-6 px-12 grid 
        grid-cols-3 items-center  shadow-xl gap-6'>
          {cardData.map((data:any) => (
            <div
              key={data.id}
              onMouseEnter={() => handleHover(data.id)}
              className="bg-gradient-to-r from-gray-300 to-gray-700 text-white px-4 py-6 w-full h-40 flex items-center justify-center rounded-lg transition-transform transform hover:scale-105 shadow-md"
            >
              <h3 className='text-xl font-semibold'>{data.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoryRight;
