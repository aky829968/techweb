import React, { useState } from "react";

const Topper = () => {
  const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxC_GSUSYxnaHu81Y1sqcAwqQvDSAzJkTsuw&s",
    "https://thumbs.dreamstime.com/b/life-coaching-logo-design-personality-development-training-support-template-business-education-brand-ideas-207897942.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWclvT7kz36hXLdAMSjrfrlEUb3FCxh4zCtQ&s",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="bg-red-500 py-4">
      <h2 className=" text-center text-2xl text-white font-semibold my-2">
        Topper Students
      </h2>
      <hr className="w-32 mx-auto bg-green-600 h-1" />
      <h3 className="text-center font-semibold text-white my-2">
        Climax Tecnical Institute
      </h3>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Image Display */}
        <div className="flex w-56 h-56 mx-auto">
          <img
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full"
          />
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          &#10094; {/* Left Arrow */}
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default Topper;
