import React from 'react';
import WorkSection from '../_component/WorkSection';

const Bill = () => {

  const cardData = [
    {
      image: '/bill_book.png', // Replace with actual image URL
      subtitle: 'Custom Bill Printing',
      title: 'Tailored Bill Books for Your Business',
      description: 'Our custom bill books are designed to meet your specific business needs. Whether you require duplicate or triplicate formats, our high-quality printing ensures durability and clarity, making your billing process seamless and professional.',
    },
    {
      image: 'https://www.example.com/bill2.jpg', // Replace with actual image URL
      subtitle: 'Professional Bill Formats',
      title: 'Streamline Your Billing with Professional Formats',
      description: 'Choose from a variety of professional bill formats that cater to different business types. Our designs include customizable fields to ensure all necessary information is captured accurately, enhancing your billing efficiency.',
    },
    {
      image: 'https://www.example.com/bill3.jpg', // Replace with actual image URL
      subtitle: 'High-Quality Printing',
      title: 'Durable and Clear Bill Books',
      description: 'We use advanced printing technology to produce bill books that are not only visually appealing but also durable. Our prints are clear and resistant to smudging, ensuring your bills look professional and remain legible over time.',
    },
    {
      image: 'https://www.example.com/bill4.jpg', // Replace with actual image URL
      subtitle: 'Affordable and Efficient',
      title: 'Cost-Effective Billing Solutions',
      description: 'At Faisal Graphics, we provide cost-effective bill printing solutions without compromising on quality. Our efficient service ensures that you receive your customized bill books promptly, helping you manage your billing processes smoothly.',
    },
  ];

  return (
    <>
      <WorkSection className="bg-gray-500"
        title="Custom Bill Printing Services"
        description="Enhance your business operations with our professional bill printing services. At Faisal Graphics, we offer tailored bill books, high-quality printing, and a variety of formats to suit your needs. Whether you require duplicate, triplicate, or custom formats, our affordable and efficient solutions ensure your billing process is both professional and streamlined."
        cardData={cardData}
      />
    </>
  );
}

export default Bill;
