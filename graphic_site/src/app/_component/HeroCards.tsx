import React from 'react'
import Image from 'next/image'


const HeroCards = () => {
  return (

<>
<div className=' text-black bg-white h-full space-y-2 w-full'>
<div className='grid-cols-2 grid gap-2'>

<Image
className=' text-white border-1
  bg-green-100 border-white border shadow-xl shadow-white '
    
      src="/media/logo.png"
      width={200}
      height={500}
      alt="Picture of the author"

    />
    <Image
className=' text-white border-1
  bg-green-200 border-white border shadow-xl shadow-white '
    
      src="/media/logo.png"
      width={150}
      height={100}
      alt="Picture of the author"

    />
    <div/>
    <div className='w-[30%] text-white border-1
  bg-transparent border-white border shadow-xl shadow-white h-60'>

</div>
</div>
</div>
</>

)
}

export default HeroCards