import React from 'react'

 const Card = ({image,subtitle,title,description}:any) => {
  return (
<>
<div className="xl:w-1/4 md:w-1/2  p-4">
      <div className="bg-slate-300/60 p-6 rounded-lg">
        <img className="h-48 rounded w-full object-cover 
        object-center mb-6" src={image} alt="content" />
        <h3 className="tracking-widest 
         text-xs font-medium title-font">{subtitle}</h3>
        <h2 className="text-lg text-[#1E3A8A] font-medium 
        title-font mb-4">{title}</h2>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>

</>


)
}

export default Card