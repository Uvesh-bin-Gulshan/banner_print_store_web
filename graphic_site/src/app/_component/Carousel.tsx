
"use client"
import React, { useState, useEffect } from 'react';
import '../globals.css'; // Ensure this path is correct

const images = [
  "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 3; // Number of images to show at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-inner" 
        style={{ 
          transform: `translateX(${-currentIndex * (100 / visibleSlides)}%)`,
          width: `${images.length * (10 / visibleSlides)}%`
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="carousel-item" 
            style={{ 
              width: `${100 / visibleSlides}%` 
            }}
          >
            <img src={image} className="carousel-image" alt={`carousel-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
