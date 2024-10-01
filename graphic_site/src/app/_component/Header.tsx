import Link from 'next/link'
import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdCall } from 'react-icons/md'

const Header = () => {
  return (
    <header className="text-gray-600 bg-slate-200/50 body-font">
      <div className="container md:justify-between 
      flex py-2 flex-col md:flex-row items-center justify-end">
        <h1 className='font-gandalfel md:text-3xl
         text-xl sm:text-center font-medium  text-black 
          md:ml-12'>Faisal Graphics</h1>
        <nav className="flex text-xs md:text-lg  justify-center 
        font-light uppercase px-2 items-center text-black md:ml-auto">
          <Link className="md:mr-10 ml-2 mr-2  hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="md:mr-10 hover:text-gray-900" href="../our-work">
             Works
          </Link>
          <Link className="md:mr-10 hover:text-gray-900 ml-2" href="../about-contact-us">
            About
          </Link>
        <div className="flex m-4 md:ml-20  w-full lg:w-2/5 md:my-4
         md:w-2/5 justify-end text-black lg:ml-0 mt-4 ">
          <div className="inline-flex ">
            <a href="https://wa.me/919714442086">

            <IoLogoWhatsapp className='text-xl hover:text-green-500 mr-3'/>
            </a>
          </div>
          <div className="inline-flex items-center hover:text-green-500 mr-5">
            <MdCall className='text-xl' />
          </div>
        </div>
        </nav>

      </div>
    </header>
  )
}

export default Header
