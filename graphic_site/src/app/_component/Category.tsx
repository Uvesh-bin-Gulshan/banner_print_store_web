"use client";
import React from 'react';

const Category = ({ cardData, cardDetail, hoverId, onHover }: any) => {
  return (
    <section className=" lg:m-8 p-2 lg:mb-10  gap-4">
      {/* Card Data Section */}
      <div className="rounded-xl py-3  grid grid-cols-3 
      sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 lg:gap-6 mb-4">
        {cardData.map((data: any) => (
          <div
            key={data.id}
            onMouseEnter={() => onHover(data.id)}
            className="bg-gradient-to-bl
             from-gray-900 via-gray-700 to-gray-400 text-white px-4 py-6 
             w-full h-20  flex items-center justify-center rounded-lg transition-transform transform hover:scale-105 shadow-md"
          >
            <h3 className="md:text-xl text-sm uppercase font-semibold">{data.title}</h3>
          </div>
        ))}
      </div>

      {/* Card Detail Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 -m-4 p-1">
        {cardDetail[hoverId - 1]?.map((detail: any) => (
          <div key={detail.id} className=" w-full p-2  md:p-4">
            <div className="flex relative w-full">
              <img
                alt={detail.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={detail.image}
              />
              <div className="md:px-8 md:py-10 relative z-10 p-4
              w-full h-56 md:h-full text-sm border-4 border-gray-200 
              bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  {detail.title}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {detail.title}
                </h1>
                <p className="leading-relaxed text-wrap">{detail.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
