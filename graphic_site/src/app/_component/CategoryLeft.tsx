"use client"
import { AnyARecord } from 'dns'
import { Bokor, Cardo } from 'next/font/google'
import { title } from 'process'
import React, { useState } from 'react'

const CategoryLeft = ({cardData,cardDetail,className}:any) => {
const [hoverId,setHoverId]=useState("1")
const handleHover=(id:string)=>{
setHoverId(id)
};
  return (
<>

<section className={`flex justify-between ${className}`} >
<div className='bg-cyan-400  p-12 grid grid-cols-3  gap-4 glass'>
  {cardData.map((data:any)=>(
    
    <div key={data.id} 
    onMouseEnter={()=>handleHover(data.id)}
    
    className="bg-blue-500 h-fit w-fit">
      <div className='flex justify-between'>
       <div className='bg-orange-700'>
       <h3 className='text-white text-xl'>{data.title}</h3>
       </div> 
       
      </div>
    </div>
    
  ))}

</div>

<div className='w-full h-full'>
   {cardDetail.map((detail:any)=>(
<div key={detail.id}>
  {hoverId === detail.id &&(
      <>{detail.image}
      {detail.title}
      {detail.description}
      
      </>
     
    )

  }
  
  </div>   
   ))}

</div>
  
</section>


</>
  )
}

export default CategoryLeft



