
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "The radiology learning section is very informative. The images and case studies helped me a lot in my studies.",
    name: "Ravi Mehta",
    role: "Medical Student",
    img: "https://cdn-icons-png.flaticon.com/512/4825/4825044.png"
  },
  {
    text: "Great platform for learning radiology. The resources are very helpful and easy to understand.",
    name: "Ananya Sharma",
    role: "Consultant Radiologist",
    img: "https://cdn-icons-png.flaticon.com/512/4825/4825112.png"
    
   
  },
];

export default function Climet(){
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { text, name, role, img } = testimonials[index];

  return (
    <section className="bg-gradient-to-r from-blue-100 px-6 bg-blue-300 h-[50vh] py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <p className="text-sm text-blue-600 font-semibold mb-2">
            + CLIENT TESTIMONIALS
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            <span className="text-blue-600">Voices of Trust</span> <br />
            From Our Valued Clients
          </h2>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 relative py-10">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={img}
              alt={name}
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <FaQuoteLeft className="text-blue-500 text-xl" />
          </div>
          <p className="text-gray-700 mb-4">"{text}"</p>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>

          {/* Navigation Arrows */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-100 rounded-full hover:bg-blue-100"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-gray-100 rounded-full hover:bg-blue-100"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}