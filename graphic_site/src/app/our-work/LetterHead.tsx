import React from 'react'
import WorkSection from '../_component/WorkSection'

const LetterHead = () => {
  
  const cardData = [
    {
      image: 'https://dummyimage.com/720x400',
      subtitle: 'Professional Appearance',
      title: 'Make a Lasting Impression',
      description: 'Elevate your business communication with custom-designed letterheads that reflect your brand’s professionalism and identity.',
    },
    {
      image: 'https://dummyimage.com/721x401',
      subtitle: 'Premium Quality',
      title: 'High-Quality Paper and Print',
      description: 'We use only the finest materials and printing techniques to ensure your letterhead looks and feels premium, making every correspondence noteworthy.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'Custom Design',
      title: 'Tailored to Your Brand',
      description: 'Whether you need a sleek, modern design or something more traditional, we create letterheads that perfectly match your brand’s personality and style.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'Various Sizes',
      title: 'Flexible Options',
      description: 'Choose from various sizes to suit your needs, whether for official letters, internal communications, or special announcements.',
    },
  ];
  return (
<>

<WorkSection className="bg-gray-500"
      title="Letter Head"
      description="Make a lasting impression with bespoke letterheads that reflect your brand’s unique identity. Crafted from the finest materials and available in various sizes, our letterheads ensure your business stands out in every correspondence, combining premium design with exceptional print quality."
      cardData={cardData}
    />
</>


)
}

export default LetterHead
