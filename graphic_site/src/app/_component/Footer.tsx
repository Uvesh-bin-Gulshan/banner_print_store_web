import React from 'react';
import Image from "next/image";

const Footer = () => {
  return (
<>
<footer className="text-gray-600 body-font ">
  <div className="container text-white px-5 py-14 justify-between flex
   mx-auto bg-blue-900 flex md:items-center
    lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-[40%] flex-shrink-0 md:mx-0 mx-auto text-center md:text-center">
      <a className="flex title-font font-medium items-center  justify-center text-white">
        <Image
          className={`text-white ml-4    shadow-gray-400 `}
          src="/media/footer_logo.png"
          width={60}
          height={60}
          alt="/logo"/>
        <span className=" text-6xl text-[#FAAF22] text-center ml-4  font-gandalfel">Faisal Graphics</span>
      </a>
      {/* <p className="mt-3 ml-4 tracking-wider	 text-lg tracking-widest text-white font-medium text-gray-500">
        CUSTOMER SATISFACTION IS OUR PRIORITY</p> */}
        <div className='m-4 mt-4 bg-blue-700/50 p-4 text-left tracking-widest rounded-lg'>
         <h6 className='mb-2 font-semibold'>Contact Information</h6>
      <div >
      <label className='mr-2'>Faisal:</label>
      
      <a href="tel:+919714442086">
        +91 9714442086
      </a>
      </div>
    <div >
      <label className='mr-2'>Nafis:</label>

      <a href="tel:+919825667409">
        +91 9825667409
      </a>
      </div>
      <div >
      <label className='mr-2'>Sajid:</label>
      
      <a href="tel:+919510101210">
        +91 9510101210
      </a>
      </div>
      <h6 className='mb-2 mt-2 font-semibold'>Address</h6>
      <div >
      
      <p>
      Faisal Graphics
      Panjrigar Street Corner, Fatehpura Main Rd, Fatehpura, Vadodara, Gujarat 390006        </p>
      </div>
   



        </div>
    </div>
    <div className="flex-grow flex flex-wrap rounded-lg
     md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
    <iframe
    className='rounded-xl h-56 mt-24'
              width="100%"
              height="100%"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.2156811100017!2d73.20921779999999!3d22.307681399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf66d31a836b%3A0x98a374ff6fdbde57!2sFaisal%20Graphics!5e0!3m2!1sen!2sin!4v1722451730931!5m2!1sen!2sin"   loading="lazy"  style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.6)' }}
            ></iframe>
            
    </div>
  </div>
  <div className="bg-[#FAAF22] text-[#004AAD]">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" text-sm font-medium text-center sm:text-left">© 2024  — CompanyName
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 ">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 ">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 ">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

</>

)
}

export default Footer