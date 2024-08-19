import React from 'react';
import WorkSection from '../_component/WorkSection';

const FileAndBag = () => {

  const cardData = [
    {
      image: 'https://dummyimage.com/720x400',
      subtitle: 'Custom File Printing',
      title: 'Personalized Files for Organized Professionals',
      description: 'Keep your documents in order with our custom file printing services. Whether for corporate or personal use, our high-quality files are designed to be both functional and visually appealing, helping you stay organized in style.',
    },
    {
      image: 'https://dummyimage.com/721x401',
      subtitle: 'Branded Bags for Businesses',
      title: 'Stylish and Durable Bags with Your Logo',
      description: 'Promote your brand with custom-printed bags that combine style and durability. Perfect for events, giveaways, or everyday use, our bags are designed to leave a lasting impression while providing practical value.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'Eco-Friendly Options',
      title: 'Sustainable Bags for a Greener Future',
      description: 'Make an impact with our eco-friendly bag options. Crafted from sustainable materials, these bags are perfect for businesses looking to promote their brand while supporting environmental responsibility.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'Versatile Printing Solutions',
      title: 'Files and Bags for Every Need',
      description: 'Whether you need custom files for office organization or branded bags for promotional purposes, our versatile printing solutions are designed to meet all your needs with precision and creativity.',
    },
  ];

  return (
    <>
      <WorkSection className="bg-gray-500"
        title="Premium File and Bag Printing Services"
        description="At Faisal Graphics, we specialize in high-quality file and bag printing that caters to both personal and professional needs. From custom-designed files that help you stay organized to stylish branded bags that promote your business, we offer a range of options to suit every requirement. Choose from eco-friendly materials, versatile designs, and durable printing solutions to make a statement with every file and bag."
        cardData={cardData}
      />
    </>
  );
}

export default FileAndBag;
