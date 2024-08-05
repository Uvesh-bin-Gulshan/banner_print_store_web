import React from 'react'
import WorkSection from '../_component/WorkSection'

const OffSetPrinting = () => {
  
  const cardData = [
    {
      image: 'https://dummyimage.com/720x400',
      subtitle: 'SUBTITLE',
      title: 'Bill Books and Letterheads',
      description: 'Professional printing services for all your business needs. Get customized bill books and letterheads in various sizes.',
    },
    {
      image: 'https://dummyimage.com/721x401',
      subtitle: 'SUBTITLE',
      title: 'Colosseum Roma',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'SUBTITLE',
      title: 'sffsdf',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'SUBTITLE',
      title: 'San Francisco',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
  ];
  return (
<>

<WorkSection className="bg-gray-500"
      title="Offset Printing"
      description="Whatever cardigan tote bassdgdfg tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag."
      cardData={cardData}
    />
</>


)
}

export default OffSetPrinting
