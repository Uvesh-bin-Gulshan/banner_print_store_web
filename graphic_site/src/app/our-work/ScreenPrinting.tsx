import React from 'react'
import WorkSection from '../_component/WorkSection'

const ScreenPrinting = () => {
  
  const cardData = [
    {
      image: 'https://dummyimage.com/720x400',
      subtitle: 'Custom Design Expertise',
      title: 'Unique Prints Tailored to Your Vision',
      description: 'Our skilled team works closely with you to create custom designs that reflect your brand’s identity or personal style. From simple logos to intricate patterns, we ensure your designs are perfectly translated onto your chosen material.',
    },
    {
      image: 'https://dummyimage.com/721x401',
      subtitle: 'Vibrant and Long-Lasting Prints',
      title: 'Quality That Endures',
      description: 'Using high-quality inks and advanced printing techniques, we produce screen prints that are rich in color and built to last. Our prints resist fading and wear, ensuring your design remains vibrant over time.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'Versatile Printing Options',
      title: 'Wide Range of Materials',
      description: 'Our screen printing service is versatile, allowing us to print on a variety of materials including fabric, paper, plastic, and more. Whether you need T-shirts, posters, or promotional items, we have the flexibility to handle your project.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'Efficient and Reliable Service',
      title: 'On-Time Delivery for Every Order',
      description: 'We understand the importance of deadlines, which is why we pride ourselves on delivering your screen printing projects on time, without compromising on quality. Trust Faisal Graphics to provide efficient service that meets your schedule.',
    },
  ];
  return (
<>

<WorkSection className="bg-gray-500"
      title="Screen Printing"
      description="At Faisal Graphics, we bring your designs to life with our expert screen printing services. Whether you're looking to print on apparel, promotional items, or other materials, our screen printing ensures vivid colors and long-lasting quality. With precision and attention to detail, we deliver prints that make your brand or message stand out. Perfect for businesses, events, and personal projects, our screen printing service combines creativity with durability to meet all your printing needs."
      cardData={cardData}
    />
</>


)
}

export default ScreenPrinting
