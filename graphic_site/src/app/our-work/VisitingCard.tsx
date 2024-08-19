import React from 'react';
import WorkSection from '../_component/WorkSection';

const VisitingCard = () => {

  const cardData = [
    {
      image: 'https://dummyimage.com/720x400',
      subtitle: 'Custom Designs Tailored to You',
      title: 'Unique and Memorable Business Cards',
      description: 'Stand out with bespoke business cards that reflect your brand’s identity. Whether you need a minimalist design or something bold and eye-catching, our custom designs ensure that your business cards leave a lasting impression.',
    },
    {
      image: 'https://dummyimage.com/721x401',
      subtitle: 'Premium Finishes for a Professional Look',
      title: 'Enhance Your Cards with High-Quality Finishes',
      description: 'Choose from a variety of premium finishes such as UV coating, embossing, gold foil, and velvet touch. These options add a layer of sophistication and durability to your business cards, making them not only visually appealing but also long-lasting.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'Durable and Versatile Options',
      title: 'Business Cards in All Shapes and Sizes',
      description: 'We offer business cards in various shapes and sizes, including die-cut options. Whether you prefer standard dimensions or a custom shape that stands out, we ensure your cards are as unique as your brand.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'Affordable and Reliable Service',
      title: 'High-Quality Printing at Competitive Prices',
      description: 'At Faisal Graphics, we combine quality with affordability. Our reliable printing services ensure that you receive high-quality business cards on time and within budget, making us the perfect choice for all your printing needs.',
    },
  ];

  return (
    <>
      <WorkSection className="bg-gray-500"
        title="Visiting Card"
        description="At Faisal Graphics, we specialize in creating unique and professional business cards that make a lasting impression. With custom designs, premium finishes, and a variety of sizes and shapes, our business card service is tailored to meet your brand’s specific needs. Trust us to deliver high-quality printing at competitive prices, ensuring your business cards represent your brand with excellence."
        cardData={cardData}
      />
    </>
  );
}

export default GraphicAndFlex;
