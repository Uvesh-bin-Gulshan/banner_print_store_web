import React from 'react'
import WorkSection from '../_component/WorkSection'

const FlexBanner = () => {
  
  const cardData = [
    {
      image: '/media/flex1.jpg',
      subtitle: 'SUBTITLE',
      title: 'Chichen Itza',
      description: 'Vibrant banners. Grab attention instantly.',
    },
    {
      image: '/media/flex2.jpeg',
      subtitle: 'SUBTITLE',
      title: 'Colosseum Roma',
      description: 'Custom designs. Perfect for every event.',
    },
    {
      image: '/media/flex.jpg',
      subtitle: 'SUBTITLE',
      title: 'sffsdf',
      description: 'Weather-resistant. Durable, long-lasting.',
    },
    {
      image: '/media/flex4.avif',
      subtitle: 'SUBTITLE',
      title: 'San Francisco',
      description: 'Bold graphics. Convey your message clearly.',
    },
  ];
  return (
<>

<WorkSection className="bg-gray-500"
      title="Flex Banner"
      description="Eye-Catching Banners
Grab attention with custom-designed flex banners. Ideal for events, promotions, and storefronts."
      cardData={cardData}
    />
</>


)
}

export default FlexBanner
