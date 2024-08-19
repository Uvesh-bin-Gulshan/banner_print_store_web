"use client";
import { useState } from 'react';
import CategoryLeft from '../_component/CategoryLeft';

const CategoryCard1 = () => {
  const [hoverId, setHoverId] = useState("1");

  const handleHover = (id: string) => {
    setHoverId(id);
  };

  const cardDetail = [
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
      description: 'High-quality flex banners for any occasion. Custom designs that enhance visibility and make a lasting impression.',
    },
    {
      id: '3',
      image: '/media/offset_printing.png',
      title: 'Offset Printing',
      description: 'Precision printing for various materials including bill books and letterheads. Reliable and consistent results for all your printing needs.',
    },
    {
      id: '4',
      image: '/media/brochures.png', // Replace with actual image URL
      title: 'Brochures',
      description: 'Professionally designed brochures that capture attention and convey your message effectively. Perfect for marketing and informational purposes.',
    },
    {
      id: '5',
      image: '/media/pamphlets.png', // Replace with actual image URL
      title: 'Pamphlets',
      description: 'Custom pamphlets that provide concise and engaging information. Ideal for promotions, events, and educational purposes.',
    },
    {
      id: '6',
      image: '/media/stickers.png', // Replace with actual image URL
      title: 'Stickers',
      description: 'High-quality stickers for branding, promotions, and personal use. Durable and vibrant designs that stick with your audience.',
    }
  ];

  const cardData = [
    {
      id: '1',
      title: 'Graphic Design',
    },
    {
      id: '2',
      title: 'Flex Banner',
    },
    {
      id: '3',
      title: 'Offset Printing',
    },
    {
      id: '4',
      title: 'Brochures',
    },
   
