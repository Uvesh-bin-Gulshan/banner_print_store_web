import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdCall } from 'react-icons/md'

const Header = () => {
  return (
    <>

<header className="text-gray-600  body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/6   flex-wrap items-center text-base md:ml-auto">
      <a className="mr-5 hover:text-[#f59e0b]">Home</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
      <a className="hover:text-gray-900">Our Works</a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      {/* <svg xmlns="media/logo.png" fill="blue" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-orange-500 rounded-none" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <img src="media/logo.png" className='w-8 h-8' />
      <span className="ml-3 text-xl">Faisal Graphics</span>
    </a>
    
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <div className="inline-flex  items-center ">
      <IoLogoWhatsapp className='text-[#00D757] text-2xl   mr-5'/>

      </div>
      <div className="inline-flex items-center ">
      <MdCall className='text-2xl' />

      </div>
    

    </div>
  </div>
</header>
    </>
  )
}

export default Header