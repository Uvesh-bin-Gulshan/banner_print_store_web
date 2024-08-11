import React from 'react'
import WorkSection from '../_component/WorkSection'

const OffSetPrinting = () => {
  
  const cardData = [
    {
      image: 'https://dummyimage.com/720x400',
      subtitle: 'SUBTITLE',
      title: 'Bill Books and Letterheads',
      description: 'Precision printing. High-quality results.',
    },
    {
      image: 'https://dummyimage.com/721x401',
      subtitle: 'SUBTITLE',
      title: 'OffSetPrinting,
      description: 'Custom sizes. Perfect for every need.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'SUBTITLE',
      title: 'OffSetPrinting,
      description: 'Vibrant colors. Consistent and accurate.',
    },
    {
      image: 'https://dummyimage.com/722x402',
      subtitle: 'SUBTITLE',
      title: 'San Francisco',
      description: Reliable service. Quick turnaround.',
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
