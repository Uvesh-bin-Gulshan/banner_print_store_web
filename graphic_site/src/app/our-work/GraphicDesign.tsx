import React from 'react'
import WorkSection from '../_component/WorkSection'

const GraphicDesign = () => {
  
  const cardData = [
    {
      
      image: '/public/media/graphic2.png',
      subtitle: 'SUBTITLE',
      title: 'Chichen Itza',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
      image: '/public/media/graphic3.jpg',
      subtitle: 'COMING SOON',
      title: 'Colosseum Roma',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
      image: '/public/media/grpaphic1.jpg',
      subtitle: 'SUBTITLE',
      title: 'aamir',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
      image: '/public/media/grpaphic1.jpg',
      subtitle: 'ID NAME',
      title: 'San Francisco',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
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
