import React, { useState, useEffect } from "react";

const Crousel = () => {
  const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxC_GSUSYxnaHu81Y1sqcAwqQvDSAzJkTsuw&s",
    "https://thumbs.dreamstime.com/b/life-coaching-logo-design-personality-development-training-support-template-business-education-brand-ideas-207897942.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWclvT7kz36hXLdAMSjrfrlEUb3FCxh4zCtQ&s",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-4xl h-96 mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-96 flex-shrink-0 object-fit"
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Crousel;
