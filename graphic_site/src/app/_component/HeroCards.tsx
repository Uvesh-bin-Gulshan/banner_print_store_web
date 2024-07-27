import React from "react";
import CardImage from "./CardImage";

const HeroCards: React.FC = () => {
  const images = [
    { src: "/three.png",  className: "bg-transparent border-l-2 rounded-xl", alt: "Picture of the author 1" },
    { src: "/two.png",  className: "bg-transparent  border-2 rounded-xl", alt: "Picture of the author 2" },
    { src: "/three.png",  className: "bg-transparent  border-2 rounded-xl", alt: "Picture of the author 3" },
    { src: "/two.png", className: "bg-transparent  border-2 rounded-xl", alt: "Picture of the author 4" },
    { src: "/three.png",  className: "bg-transparent  border-2 rounded-xl", alt: "Picture of the author 5" },
    { src: "/one.png",  className: "bg-transparent  border-2 rounded-xl", alt: "Picture of the author 6" },
    // { src: "/media/logo.png",  className: "bg-transparent", alt: "Picture of the author 7" },
    // { src: "/media/logo.png",  className: "bg-transparent", alt: "Picture of the author 8" },
    // { src: "/media/logo.png",  className: "bg-transparent", alt: "Picture of the author 9" }
  ];

  return (
    <div className="text-black  h-[50%] w-[50%]  p-2">
      <div className="grid grid-cols-3 gap-1 mt-12">
        {images.map((image, index) => (
          <CardImage
            key={index}
            src={image.src}
            width={200}
            height={200}
            className={image.className}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCards;
