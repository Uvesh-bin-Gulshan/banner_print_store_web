import React from 'react'
import WorkSection from '../_component/WorkSection'

const FlexBanner = () => {
  
  const cardData = [
    {
      image: '/media/flex1.jpg',
      subtitle: 'Custom Design Solutions',
      title: 'Tailored to Your Brand’s Vision',
      description: 'Vibrant banners. Grab attention instantly.',
    },
    {
      image: '/media/flex2.jpeg',
      subtitle: 'Durable and Weather-Resistant',
      title: 'Built to Last, Indoors and Out',
      description: 'Custom designs. Perfect for every event.',
    },
    {
      image: '/media/flex3.jpg',
      subtitle: 'High-Quality Printing',
      title: 'Vibrant Colors and Crisp Details',
      description: 'Weather-resistant. Durable, long-lasting.',
    },
    {
      image: '/media/flex4.avif',
      subtitle: 'Custom Design Solutions',
      title: 'Tailored to Your Brand’s Vision',
      description: 'Bold graphics. Convey your message clearly.',
    },
  ];
  return (
<>

<WorkSection className="bg-gray-500"
      title="Flex Banner"
      description="At Faisal Graphics, we specialize in creating vibrant and durable flex banners that grab attention and convey your message with clarity. Whether you’re promoting an event, showcasing a product, or enhancing your storefront, our flex banners are designed to make a strong visual impact. With custom designs tailored to your brand and top-quality printing that ensures longevity, our banners are the perfect solution for any promotional need."
      cardData={cardData}
    />
</>


)
}

export default FlexBanner
