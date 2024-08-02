import React from "react";
import CardImage from "./CardImage";

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
    <div className="text-black sm:hidden   ">
      <div className="grid grid-cols-3 gap-1 mt-40 mr-4">
        {images.map((image, index) => (
          <CardImage
            key={index}
            src={image.src}
            width={400}
            height={400}
            className={image.className}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCards;
