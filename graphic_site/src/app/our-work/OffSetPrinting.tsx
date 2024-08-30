import React from 'react'
import WorkSection from '../_component/WorkSection'

const OffSetPrinting = () => {
  
  const cardData = [
    {
      image: '/media/offset1.jpeg',
      subtitle: 'Professional Appearance',
      title: 'Make Every Communication Count',
      description: 'A well-crafted letterhead speaks volumes about your business. Our designs ensure that your brand stands out with every piece of correspondence, showcasing your professionalism and attention to detail.',
    },
    {
      image: '/media/offset2.jpeg',
      subtitle: 'Premium Quality Materials',
      title: 'Unmatched Quality for a Lasting Impact',
      description: 'We use only the highest quality paper and printing techniques to produce letterheads that not only look stunning but also feel exceptional. This ensures your brand is represented with the utmost care and quality.',
    },
    {
      image: '/media/offset3.jpeg',
      subtitle: 'Custom Design Tailored to You',
      title: 'Reflect Your Brand’s Unique Identity',
      description: 'Your brand is unique, and your letterhead should be too. We work closely with you to create a custom design that captures your brand’s essence, ensuring that every detail aligns with your company’s identity.',
    },
    {
      image: '/media/offset4.jpeg',
      subtitle: 'Versatile Sizing Options',
      title: 'Letterheads to Fit Every Need',
      description: 'Whether you need standard sizes or something more unique, our letterhead service offers a variety of options to meet all your business communication needs. From official letters to internal memos, we’ve got you covered.',
    },
  ];
  return (
<>





<WorkSection className="bg-gray-500"
      title="Offset Printing"
      description="Elevate Your Brand with Professional, High-Quality Letterheads
At Faisal Graphics, we understand that a letterhead is more than just a piece of paper—it’s a crucial aspect of your brand identity. Our expert designers work closely with you to create a letterhead that embodies your brand’s essence. Whether you need something modern and sleek or classic and elegant, our premium materials and printing techniques ensure that your letterhead makes a lasting impression in every correspondence."
      cardData={cardData}
    />
</>


)
}

export default OffSetPrinting
