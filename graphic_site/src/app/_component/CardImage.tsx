import React from "react";
import Image from "next/image";

interface CardImageProps {
  src: string;
  width: number;
  height: number;
  className?: string;
  alt: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, width, height, className = "", alt }) => {
  return (
    <Image
      className={`text-white  bg-green-200  shadow-xl shadow-gray-400 ${className}`}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default CardImage;
