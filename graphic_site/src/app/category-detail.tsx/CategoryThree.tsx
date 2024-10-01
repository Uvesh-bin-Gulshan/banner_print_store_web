"use client"
import { Bokor, Cardo } from 'next/font/google'
import { title } from 'process'
import React, { useState } from 'react'
import Category from '../_component/Category'
import CategoryLeft from '../_component/Category'

const CategoryThree = () => {
const [hoverId,setHoverId]=useState("1")
const handleHover=(id:string)=>{
setHoverId(id)
};



const cardDetail = [
  [
    {
      id: '1',
      image: '/media/graphic_design.png',
      title: 'Graphic Design',
      description: 'Unique logos and stickers capturing brand essence. Memorable, versatile, and timeless designs tailored to represent your business effectively.',
    },
    {
      id: '2',
      image: '/media/flex_printing.png',
      title: 'Flex Printing',
      description: 'High-quality flex banners and flyers for any occasion. Custom designs that enhance visibility and make a lasting impression.',
    },
    {
      id: '3',
      image: '/media/offset_printing.png',
      title: 'Offset Printing',
      description: 'Precision printing for various materials including bill books and letterheads. Reliable and consistent results for all your printing needs.',
    },
    {
      id: '4',
      image: '/media/brochures.png',
      title: 'Brochures',
      description: 'Professionally designed brochures that capture attention and convey your message effectively. Perfect for marketing and informational purposes.',
    },
    {
      id: '5',
      image: '/media/pamphlets.png',
      title: 'Pamphlets',
      description: 'Custom pamphlets that provide concise and engaging information. Ideal for promotions, events, and educational purposes.',
    },
    {
      id: '6',
      image: '/media/stickers.png',
      title: 'Stickers',
      description: 'High-quality stickers for branding, promotions, and personal use. Durable and vibrant designs that stick with your audience.',
    }
  ],
  [
    {
      id: '1',
      image: '/media/graphic_design.png',
      title: 'Graphic Design',
      description: 'Unique logos and stickers capturing brand essence. Memorable, versatile, and timeless designs tailored to represent your business effectively.',
    },
    {
      id: '2',
      image: '/media/flex_printing.png',
      title: 'Flex Printing',
      description: 'High-quality flex banners and flyers for any occasion. Custom designs that enhance visibility and make a lasting impression.',
    },
    {
      id: '3',
      image: '/media/offset_printing.png',
      title: 'Offset Printing',
      description: 'Precision printing for various materials including bill books and letterheads. Reliable and consistent results for all your printing needs.',
    },
    {
      id: '4',
      image: '/media/brochures.png',
      title: 'Brochures',
      description: 'Professionally designed brochures that capture attention and convey your message effectively. Perfect for marketing and informational purposes.',
    },
    {
      id: '5',
      image: '/media/pamphlets.png',
      title: 'Pamphlets',
      description: 'Custom pamphlets that provide concise and engaging information. Ideal for promotions, events, and educational purposes.',
    },
    {
      id: '6',
      image: '/media/stickers.png',
      title: 'Stickers',
      description: 'High-quality stickers for branding, promotions, and personal use. Durable and vibrant designs that stick with your audience.',
    }
  ],
  // [
  //   {
  //     id: '1',
  //     image: '/media/graphic_design.png',
  //     title: 'Graphic Design',
  //     description: 'Unique logos and stickers capturing brand essence. Memorable, versatile, and timeless designs tailored to represent your business effectively.',
  //   },
  //   {
  //     id: '2',
  //     image: '/media/flex_printing.png',
  //     title: 'Flex Printing',
  //     description: 'High-quality flex banners and flyers for any occasion. Custom designs that enhance visibility and make a lasting impression.',
  //   },
  //   {
  //     id: '3',
  //     image: '/media/offset_printing.png',
  //     title: 'Offset Printing',
  //     description: 'Precision printing for various materials including bill books and letterheads. Reliable and consistent results for all your printing needs.',
  //   },
  //   {
  //     id: '4',
  //     image: '/media/brochures.png',
  //     title: 'Brochures',
  //     description: 'Professionally designed brochures that capture attention and convey your message effectively. Perfect for marketing and informational purposes.',
  //   },
  //   {
  //     id: '5',
  //     image: '/media/pamphlets.png',
  //     title: 'Pamphlets',
  //     description: 'Custom pamphlets that provide concise and engaging information. Ideal for promotions, events, and educational purposes.',
  //   },
  //   {
  //     id: '6',
  //     image: '/media/stickers.png',
  //     title: 'Stickers',
  //     description: 'High-quality stickers for branding, promotions, and personal use. Durable and vibrant designs that stick with your audience.',
  //   }
  // ]

];

const cardData = [
  { id: '1', title: 'Graphic Design' },
  { id: '2', title: 'Flex Banner' },
  { id: '3', title: 'Offset Printing' },
];
  return (
<>

<Category
      cardData={cardData}
      cardDetail={cardDetail}
      hoverId={hoverId}
      onHover={handleHover}
    />

</>
  )
}
export default CategoryThree



// Graphic Design
// flex Banner
// offset printing
// screen printing 
// wedding Card
// visiting Card
// bill Book 
// letter head 
// All kind of Files & bag Printing 
