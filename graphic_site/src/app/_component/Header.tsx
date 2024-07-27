import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdCall } from 'react-icons/md'

const Header = () => {
  return (
    <>

<header className="text-gray-600 bg-slate-100  body-font">
  <div className="container  flex flex-wrap p-1.5 
  flex-col md:flex-row items-center">
    <nav className="flex  justify-center font-semibold uppercase    flex-wrap items-center 
    text-black md:ml-auto">
      <a className="mr-5 hover:text-gray-900">Our Works</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className=" hover:text-gray-900">Contact</a>
    </nav>
    {/* <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      {/* <svg xmlns="media/logo.png" fill="blue" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-orange-500 rounded-none" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      {/* <img src="media/logo.png" className='w-8 h-8' /> */}
      {/* <span className="ml-3 text-xl">Faisal Graphics</span> */}
    
    
    <div className="lg:w-2/5 inline-flex lg:justify-end   text-black lg:ml-0">
    <div className="inline-flex  items-center ">
      <IoLogoWhatsapp className=' text-xl hover:text-green-500    mr-3'/>

      </div>
      <div className="inline-flex items-center hover:text-green-500 mr-5">
      <MdCall className='text-xl' />

      </div>
    

    </div>
  </div>
</header>
    </>
  )
}

export default Header