import { Bokor, Cardo } from 'next/font/google'
import { title } from 'process'
import React from 'react'

const Category = () => {


  const cardData =[{
    image:'/media/graphic.jpg',
    title:'Graphic Design',
    description:'askdjkjdkslfjfsfd',
    

  },

  {
    image:'/media/graphic.jpg',
    title:'Graphic Design',
    description:'askdjkjdkslfjfsfd',
    

  },
  {
    image:'/media/graphic.jpg',
    title:'Graphic Design',
    description:'askdjkjdkslfjfsfd',
    

  },
  {
    image:'/media/graphic.jpg',
    title:'Graphic Design',
    description:'askdjkjdkslfjfsfd',
    

  },
  {
    image:'/media/graphic.jpg',
    title:'Graphic Design',
    description:'askdjkjdkslfjfsfd',
    

  },
  {
    image:'/media/graphic.jpg',
    title:'Graphic Design',
    description:'askdjkjdkslfjfsfd',
    

  },
  {
    image:'/media/graphic.jpg',
    title:'Graphic Design',
    description:'askdjkjdkslfjfsfd',
    

  },
  {
    image:'/media/graphic.jpg',
    title:'Graphic Design',
    description:'askdjkjdkslfjfsfd',
    

  },
  {
    image:'/media/graphic.jpg',
    title:'Graphic Design',
    description:'askdjkjdkslfjfsfd',
    

  },
]
  return (
<>
<div className='bg-cyan-400  p-12 grid grid-cols-3  gap-4 glass'>
  {cardData.map((data,index)=>(
    <div key={index} className="card w-full p-0 glass">
  <figure className='h-96'><img src={data.image} alt={data.image}/></figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
  ))}

</div>

</>
  )
}

export default Category



// Graphic Design
// flex Banner
// offset printing
// screen printing 
// wedding Card
// visiting Card
// bill Book 
// letter head 
// All kind of Files & bag Printing 
