import React from 'react'

 const Card = ({image,subtitle,title,description}:any) => {
  return (
<>
<div className=" w-full p-4 ">
      <div className="bg-gray-300/60 md:h-full  md:p-6
       p-2 h-full rounded-lg">
        <img className="md:h-56 h-24 rounded w-full  object-cover 
        object-center mb-6" src={image} alt="content" />
        <h3 className="tracking-widest 
         text-xs font-medium title-font text-sm md:text-xl">{subtitle}</h3>
        <h2 className="md:text-lg text-sm text-black font-medium 
        title-font mb-4">{title}</h2>
        <p className="leading-relaxed text-base text-xs md:text-md">
          {description}</p>
      </div>
    </div>

</>


)
}

export default Card