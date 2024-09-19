import React from "react";
import CardImage from "./CardImage";
import Image from 'next/image';

const HeroCards: React.FC = () => {
  const images = [
    { src: "/three.png",  className: "bg-transparent   border-t border-l rounded-xl", alt: "Picture of the author 1" },
    { src: "/two.png",  className: "bg-transparent   rounded-xl", alt: "Picture of the author 2" },
    { src: "/three.png",  className: "bg-transparent border-t border-l   rounded-xl", alt: "Picture of the author 3" },
    { src: "/two.png", className: "bg-transparent  border-t border-l rounded-xl", alt: "Picture of the author 4" },
    { src: "/three.png",  className: "bg-transparent border-t border-l   rounded-xl", alt: "Picture of the author 5" },
    { src: "/one.png",  className: "bg-transparent   rounded-xl", alt: "Picture of the author 6" },
    // { src: "/media/logo.png",  className: "bg-transparent", alt: "Picture of the author 7" },
    // { src: "/media/logo.png",  className: "bg-transparent", alt: "Picture of the author 8" },
    // { src: "/media/logo.png",    className: "bg-transparent", alt: "Picture of the author 9" }
  ];

  return (
    <div className="text-black md:block lg:block 
    m-[2%] mt-10 fixed-
object-cover 
    
    hidden  ">
<Image className="rounded-lg shadow-xl" src="/media/hero-page.jpg" width={700} height={500} alt="Hero Image" />



{/* <div className="md:-m-2 -m-1 flex flex-wrap  justify-end "> */}
      {/* <div className="flex flex-wrap  w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover
           h-full object-center block" src="/three.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full 
          object-center block" src="/two.png"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full 
          object-cover object-center block
          " src="/three.png"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full 
          h-full object-cover object-center block"
           src="/one.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full
           object-cover h-full object-center
            block" src="/two.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full 
          object-cover h-full object-center 
          block" src="/three.png"/>
        </div>
      </div>
    </div> */}
      {/* </div> */}
    </div>
  );
};

export default HeroCards;
