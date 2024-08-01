import React from 'react'
import Card from './Card'

const WorkSection = ({ title, description, cardData }:any) => {
  return (
    <section className="text-gray-600  body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap  w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl
             font-medium title-font mb-2 text-[#1E3A8A]">{title}</h1>
            <div className="h-1 w-20 bg-[#FAAF22] rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex   flex-wrap -m-4 ">
          {cardData.map((card:any, index:any) => (
            <Card
              key={index}
              image={card.image}
              subtitle={card.subtitle}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
