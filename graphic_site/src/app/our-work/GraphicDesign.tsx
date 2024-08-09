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
      subtitle: 'COMING EARLY',
      title: 'The Art of Logo Design',
      description: ' Eye-catching brochures, business cards. Effective layouts, vibrant colors. ',
    },
    {
      image: 'https://github.com/Uvesh-bin-Gulshan/graphic_web/blob/6d9c5e32595f986efa3904e9ed60fd3cd25a4d72/graphic_site/public/media/grpaphic1.jpg',
      subtitle: 'Mastering Print Design: Tips and Tricks',
      title: 'aamir',
      description: 'Minimalism, dark mode, interactive elements. Modern, user-friendly websites.',
    },
    {
      image: '/public/media/grpaphic1.jpg',
      subtitle: 'ID NAME',
      title: 'Web Design Trends to Watch in 2024',
      description: 'Engaging visuals for social platforms. Boost online presence, drive engagement.',
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
