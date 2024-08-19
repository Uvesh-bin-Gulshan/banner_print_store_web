import React from 'react';
import WorkSection from '../_component/WorkSection';

const WeddingCard = () => {

  const cardData = [
    {
      image: 'https://dummyimage.com/720x400',
      subtitle: 'Elegant and Custom Designs',
      title: 'Tailored Wedding Invitations',
      description: 'Create the perfect wedding invitation card that reflects your unique love story. Our custom designs are tailored to match your wedding theme, ensuring your special day begins with an invitation that’s as memorable as the event itself.',
    },
    {
      image: 'https://dummyimage.com/721x401',
      subtitle: 'Premium Quality Printing',
      title: 'High-Quality Paper and Finishes',
      description: 'Make your invitations stand out with our premium paper options and exquisite finishes. From luxurious textures to elegant embossing and foil stamping, we offer the finest quality to create invitations that leave a lasting impression.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'Complete Wedding Stationery',
      title: 'Coordinated Designs for All Wedding Needs',
      description: 'Beyond invitations, we offer a complete range of wedding stationery including RSVP cards, menus, thank you cards, and more. Our coordinated designs ensure a seamless look across all your wedding materials.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'Affordable and Reliable',
      title: 'Beautiful Invitations Within Your Budget',
      description: 'At Faisal Graphics, we understand that every wedding is unique, and so is every budget. We offer beautiful, high-quality wedding invitations at competitive prices, ensuring you don’t have to compromise on your dream design.',
    },
  ];

  return (
    <>
      <WorkSection className="bg-gray-500"
        title="Wedding Cards"
        description="Celebrate your special day with wedding invitations that are as unique and beautiful as your love story. At Faisal Graphics, we specialize in creating custom wedding invitations that capture the essence of your event. With premium quality printing, a range of elegant designs, and complete wedding stationery solutions, we ensure your invitations set the perfect tone for your big day, all within your budget."
        cardData={cardData}
      />
    </>
  );
}

export default WeddingCard;
