"use client"
import { Bokor, Cardo } from 'next/font/google'
import { title } from 'process'
import React, { useState } from 'react'
import Category from '../_component/CategoryLeft'
import CategoryLeft from '../_component/CategoryLeft'

const CategoryCard3 = () => {
const [hoverId,setHoverId]=useState("1")
const handleHover=(id:string)=>{
setHoverId(id)
};



const cardDetail =[{
  id:'1',
  image:'/media/screen_printing.png',
  title:'Graphic Design',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at ex eos possimus dolorem et quibusdam error veniam vero optio ad, cumque iure, quidem maiores amet illum rem autem vel!',
  

},

{
  id:'2',
  image:'/media/visiting_card.png',
  title:'Graphic rdtgdr',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at ex eos possimus dolorem et quibusdam error veniam vero optio ad, cumque iure, quidem maiores amet illum rem autem vel!',
  

},
{
  id:'3',

  image:'/media/offset_printing.png',
  title:'Graphic tftf',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at ex eos possimus dolorem et quibusdam error veniam vero optio ad, cumque iure, quidem maiores amet illum rem autem vel!',
  

},

]
const cardData =[{
  id:'1',
  title:'Graphic Design',  
},

{
  id:'2',

  title:'Flex Banner',
  

},
{
  id:'3',

  title:'Offset Printing',
  

},

]
  return (
<>

<CategoryLeft cardData={cardData} cardDetail={cardDetail}/>


</>
  )
}

export default CategoryCard3



// Graphic Design
// flex Banner
// offset printing
// screen printing 
// wedding Card
// visiting Card
// bill Book 
// letter head 
// All kind of Files & bag Printing 
