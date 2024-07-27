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
      className={`text-white border-1 bg-green-200 border-white border shadow-xl shadow-white ${className}`}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default CardImage;
