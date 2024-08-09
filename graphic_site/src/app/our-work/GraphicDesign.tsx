import React from 'react'
import WorkSection from '../_component/WorkSection'

const GraphicDesign = () => {
  
  const cardData = [
    {
      
      image: '/public/media/graphic2.png',
      subtitle: 'WAIT',
      title: 'Chichen Itza',
      description: 'Unique logos capturing brand essence. Memorable, versatile, timeless.',
    },
    {
      image: '/public/media/graphic3.jpg',
      subtitle: 'COMING SOON',
      title: 'The Art of Logo Design',
      description: 'Print design remains a crucial aspect of marketing. From brochures to business cards, print materials need to be visually appealing and informative. This article covers essential tips for creating effective print designs, including layout, typography, and color theory.',
    },
    {
      image: 'https://github.com/Uvesh-bin-Gulshan/graphic_web/blob/6d9c5e32595f986efa3904e9ed60fd3cd25a4d72/graphic_site/public/media/grpaphic1.jpg',
      subtitle: 'Mastering Print Design: Tips and Tricks',
      title: 'aamir',
      description: 'Web design is constantly evolving. Staying updated with the latest trends can help designers create modern and user-friendly websites. This article explores the top web design trends for 2024, including minimalism, dark mode, and interactive elements.',
    },
    {
      image: '/public/media/grpaphic1.jpg',
      subtitle: 'ID NAME',
      title: 'Web Design Trends to Watch in 2024',
      description: ' Social media is a powerful tool for businesses to connect with their audience. Engaging graphics can boost your online presence and drive engagement. This guide provides tips for designing eye-catching social media graphics, including the use of colors, fonts, and images.',
    },
  ];
  return (
<>

<WorkSection className="bg-[#1E3A8A]"
      title="Graphic Design"
      description="Whatever cardigan tote b brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag."
      cardData={cardData}
    />
</>


)
}

export default GraphicDesign
