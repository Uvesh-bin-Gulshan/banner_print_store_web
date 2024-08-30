import React from 'react';
import WorkSection from '../_component/WorkSection';

const GraphicDesign = () => {

  const cardData = [
    {
      image: '/media/graphic.jpg',
      subtitle: 'The Art of Logo Design',
      title: 'Unique Logos Capturing Brand Essence',
      description: 'Our logo designs are crafted to be memorable, versatile, and timeless, perfectly capturing the essence of your brand. Make a lasting impression with a logo that truly represents your business.',
    },
    {
      image: '/media/graphic3.jpg',
      subtitle: 'Eye-Catching Print Design',
      title: 'Brochures, Business Cards, and More',
      description: 'We specialize in creating stunning brochures, business cards, and other print materials. With effective layouts and vibrant colors, our designs are crafted to communicate your message clearly and attractively.',
    },
    {
      image: '/media/graphic2.png',
      subtitle: 'Modern Web Design',
      title: 'Minimalist, User-Friendly Websites',
      description: 'Stay ahead of the curve with cutting-edge web design. From minimalism and dark mode to interactive elements, our web designs are modern, user-friendly, and optimized for a seamless experience.',
    },
    {
      image: '/media/graphic4.png',
      subtitle: 'Engaging Social Media Graphics',
      title: 'Boost Your Online Presence',
      description: 'Capture attention and drive engagement with visually appealing social media graphics. Our designs are tailored to enhance your online presence and resonate with your audience across platforms.',
    },
  ];

  return (
    <>
      <WorkSection className="bg-[#1E3A8A]"
        title="Graphic Design"
        description="At Faisal Graphics, we offer a wide range of graphic design services to help your brand stand out. From custom logos and print design to modern web design and engaging social media graphics, our team delivers creative solutions tailored to your needs. Whether you're looking to build brand identity, enhance marketing materials, or boost your online presence, we have the expertise to bring your vision to life."
        cardData={cardData}
      />
    </>
  );
}

export default GraphicDesign;
