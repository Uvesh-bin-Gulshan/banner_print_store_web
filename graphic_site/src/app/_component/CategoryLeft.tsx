"use client";
import React, { useState } from 'react';

const CategoryLeft = ({ cardData, cardDetail, className }:any) => {
  const [hoverId, setHoverId] = useState("1");

  const handleHover = (id:any) => {
    setHoverId(id);
  };

  return (
    <>
      <section className={`flex flex-col lg:flex-row m-4 lg:m-8 lg:my-28 justify-between gap-4 lg:gap-8 ${className}`}>
        <div className='rounded-xl py-3  lg:px-8 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 lg:gap-6'>
          {cardData.map((data:any) => (
            <div
              key={data.id}
              onMouseEnter={() => handleHover(data.id)}
              className="bg-gradient-to-bl from-blue-900 via-blue-700 to-blue-400 text-white px-4 py-6 w-full h-40 flex items-center justify-center rounded-lg transition-transform transform hover:scale-105 shadow-md"
            >
              <h3 className='md:text-xl text-sm uppercase font-semibold'>{data.title}</h3>
            </div>
          ))}
        </div>

        <div className='w-full lg:w-[70%] h-full bg-white rounded-xl p-6'>
          {cardDetail.map((detail:any) => (
            <div key={detail.id}>
              {hoverId === detail.id && (
                <div className='flex flex-col lg:flex-row h-full mx-4 lg:mx-10 items-center justify-between'>
                  <div className='h-full w-full lg:w-[60%]'>
                    <h2 className='text-xl font-bold mb-4'>{detail.title}</h2>
                    <p className='text-gray-700 text-left mb-4'>{detail.description}</p>
                  </div>
                  <div className='relative h-full w-full lg:w-[50%] flex justify-center items-center'>
                    <img
                      src={detail.image}
                      alt={detail.title}
                      className='w-64 h-56 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105'
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoryLeft;
