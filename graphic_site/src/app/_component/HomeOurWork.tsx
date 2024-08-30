import React from 'react'
import ImageGrid from './ImageGrid'
import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'

const HomeOurWork = () => {


    const smallimages=[
    {src:'/media/images-1.jpeg',alt:'work'},
    {src:'/media/images-2.jpeg',alt:'work'},
    {src:'/one.png',alt:'work'},
    {src:'/three.png',alt:'work'},
    {src:'/two.png',alt:'work'},
    {src:'/one.png',alt:'work'},
   

    
    ] 
    const largeimages=[
      {src:'/three.png',alt:'work'},
      {src:'/two.png',alt:'work'},
      {src:'/one.png',alt:'work'},
      {src:'/three.png',alt:'work'},
      {src:'/two.png',alt:'work'},
      {src:'/one.png',alt:'work'},
     
  
      
      ] 

     return (


<>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="w-full mb-20 text-center items-center ">
      <h1 className="sm:text-3xl text-2xl font-medium 
      title-font text-gray-900  lg:mb-0 md:mb-8">Our Work</h1>
      <p className="lg:pl-6 lg:w-2/3 mt-2  
      mx-auto leading-relaxed text-base">Faisal Graphics
Crafting visual identities with precision and creativity. At Faisal Graphics, we bring your ideas to life with top-notch design and printing services. From business cards that leave a lasting impression to vibrant banners that catch every eye, our expertise ensures your brand stands out. Trust us for quality, innovation, and excellence in every project. Your vision, our canvas.</p>
  
  
  
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover
           h-full object-center block" src="/media/images-1.jpeg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full 
          object-center block" src="/media/images-3.jpeg"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full 
          object-cover object-center block
          " src="/media/images-2.jpeg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full 
          h-full object-cover object-center block"
           src="/media/images-4.jpeg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full
           object-cover h-full object-center
            block" src="/media/images-5.jpeg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full 
          object-cover h-full object-center 
          block" src="/media/images-6.jpeg"/>
        </div>
      </div>
    </div>

    <div className="p-2 mt-14 w-full ">
          <button className="flex mx-auto text-white bg-blue-800
           border-0 py-2 px-4 focus:outline-none  hover:bg-[#F9AF23]
            rounded text-lg">
              
    <Link className='inline-flex text-md text-center items-center' href="../our-work">
    Know More  
     </Link>
              </button>
        </div>
  <div className='inline-flex bg-blue-900 rounded-lg text-center items-center text-blue-700 mt-12 ml-[45%] justify-center'>
  </div>
  </div>
</section>

</>


)
}

export default HomeOurWork
