import React from 'react'
import ImageGrid from './ImageGrid'
import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'

const HomeOurWork = () => {


    const images=[
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
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl
       font-medium title-font mb-8 text-[#1E3A8A]">Our Works</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed 
      text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit doloribus repellat quibusdam sunt. Porro ea ullam quod rerum assumenda quisquam nobis laudantium, fugiat eveniet
       quo, nisi repellat unde placeat ?</p></div>
    <div className="">
    <div className="lg:w-full sm:w-full ">
    <div className="grid grid-cols-3 gap-6 mx-24   ">


  {images.map((images,index)=>(
    

    <ImageGrid
    key={index}
    src={images.src}
    alt={images.alt}
    width={550}
    height={300}
    
    />
    ))}
  </div>

  </div>
    </div>
  <div className="flex justify-center text-lg pt-2 pb-12 ">
            <Link href="../our-work" className='inline-flex 
             text-[#F67F15]/80 pt-20 hover:text-blue-900 items-center '>
            Know More
           <FaArrowRight className='ml-2' />

          </Link>
          </div>
  </div>
</section>
</>


)
}

export default HomeOurWork