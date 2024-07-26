"use client"
import { Bokor, Cardo } from 'next/font/google'
import { title } from 'process'
import React, { useState } from 'react'
import Category from '../_component/CategoryLeft'
import CategoryRight from '../_component/CategoryRight'

const CategoryCard2 = () => {
const [hoverId,setHoverId]=useState("1")
const handleHover=(id:string)=>{
setHoverId(id)
};


  const cardDetail =[{
    id:'1',
    image:'/media/graphic.jpg',
    title:'Graphic Design',
    description:'askdjkjdkslfjfsfd',
    

  },

  {
    id:'2',
    image:'/media/graphic.jpg',
    title:'Graphic rdtgdr',
    description:'frsedgtf',
    

  },
  {
    id:'3',

    image:'/media/graphic.jpg',
    title:'Graphic tftf',
    description:'askdjkjdkslfjfsfd',
    

  },
 
]

  const cardData =[{
    id:'1',
    title:'Graphic Design',  
  },

  {
    id:'2',

    title:'Graphic Design',
    

  },
  {
    id:'3',

    title:'Graphic Design',
    

  },
  
]

  return (
<>


<CategoryRight cardData={cardData} cardDetail={cardDetail} />


</>
  )
}

export default CategoryCard2



// Graphic Design
// flex Banner
// offset printing
// screen printing 
// wedding Card
// visiting Card
// bill Book 
// letter head 
// All kind of Files & bag Printing 
