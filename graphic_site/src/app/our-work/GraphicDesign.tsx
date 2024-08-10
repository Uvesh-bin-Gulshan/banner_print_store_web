import React from 'react'
import WorkSection from '../_component/WorkSection'

const GraphicDesign = () => {
  
  const cardData = [
    {
      
      image: '/media/grpaphic1.jpg',
      subtitle: 'WAIT',
      title: 'Chichen ',
      description: 'Unique logos capturing brand essence. Memorable, versatile, timeless.',
    },
    {
      image: '/media/graphic3.jpg',
      subtitle: 'COMING EARLY',
      title: 'The Art of Logo Design',
      description: ' Eye-catching brochures, business cards. Effective layouts, vibrant colors. ',
    },
    {
      image:'/media/grpaphic1.jpg',
      subtitle: 'Mastering Print Design: Tips and Tricks',
      title: 'aamir',
      description: 'Minimalism, dark mode, interactive elements. Modern, user-friendly websites.',
    },
    {
      image: '/media/grpaphic1.jpg',
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
