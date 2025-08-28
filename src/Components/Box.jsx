
import React from "react";


import {
  FaStar,
  FaHeart,
  FaUser,
  FaCloud,
  FaCamera,
  FaBell,

} from "react-icons/fa";
import logo from "../assets/images/about.png";
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai";


const iconList = [
  {
    icon: FaUser,
    title: "Precision Imaging",
    desc: "Easily manage all users and roles in your system.",
  },
  {
    icon:  FaStar,
    title: "Advanced Technology",
    desc: "Track performance with real-time analytics and reports.",
  },
  {
    icon:     FaCloud,
    title: "Expert Interpretation",
    desc: "Customize features and preferences effortlessly.",
  },
    {
    icon:     FaCamera,
    title: "Patient-Centered Care",
    desc: "Customize features and preferences effortlessly.",
  },
    {
    icon:     FaBell,

    title: "Timely Diagnosis",
    desc: "Customize features and preferences effortlessly.",
  },
    {
    icon:   FaHeart,
    title: "Radiation Safety",
    desc: "Customize features and preferences effortlessly.",
  },
];

const Box = () => {
  return (
    <div>
      {/* Feature Boxes Section */}
      <section className="bg-blue-200  ">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16 relative 
  after:content-[''] after:block after:w-20 after:h-1 
  after:bg-gradient-to-r after:from-[#2d7ac0] after:to-[#153a5b] 
  after:mx-auto after:mt-4">
  Our Values
</h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 py-10"
    >
      {iconList.map((item, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg shadow-md p-6 text-center h-60 
          w-[90%] mx-auto flex flex-col items-center justify-center transition-transform 
          duration-300 hover:scale-105 hover:shadow-lg group"
        >
          <div className="relative flex items-center justify-center mb-4">
            <span
              className="absolute w-16 h-16 rounded-full bg-blue-500 opacity-20 scale-0
               group-hover:scale-125 transition-transform duration-300"
            ></span>
            <item.icon className="text-5xl relative text-white bg-blue-900 border rounded-full p-3" />
          </div>
          <h4 className="text-2xl text-blue-900 font-extrabold mb-2">{item.title}</h4>
          <p className="text-gray-600">{item.desc}</p>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all 
          duration-300 group-hover:w-full rounded-b-lg"></span>
        </div>
      ))}
    </div>
  

    <div className="flex flex-col md:flex-row items-start py-20 mx-10 gap-10">
      {/* Image */}
      <img
        src={logo}
        alt="About Ultrarad AI"
        className="min-h-[50vh] w-[40%] shadow-md rounded-xl"
      />

      {/* Text Content */}
      <div className="ml-0 md:ml-10 relative">
        <h1 className="text-blue-400 text-xl">Ultrarad AI</h1>
        {/* Heading */}
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          About
        </h1>

         <div className="flex items-start space-x-3 p-4">
      {/* Arrow Icon */}
      <AiOutlineArrowRight className="text-blue-600 text-xl mt-1" />

      {/* Text */}
      <span className="text-gray-800 leading-relaxed text-xl max-w-xl">
        Ultrarad is a radiologist-built platform designed to <br/>
        revolutionize the way medical imaging is interpreted <br/>
         reported, and understood.
      </span>
    </div>

        {/* Paragraph with highlighted "Ultrarad AI" */}
        <p className="text-gray-800 text-xl max-w-xl  leading-relaxed space-y-4">
          
          
          <br/>
          <br />
          Our mission is to empower healthcare professionals with advanced
          AI-driven tools that enhance diagnostic accuracy, improve reporting
          efficiency, and uncover insights that traditional methods often miss.
          We bridge the gap between cutting-edge technology and clinical
          expertise to deliver reliable outcomes that truly impact patient care.
          <br />
          <br />
          Built by radiologists for radiologists,{" "}
         
          integrates seamlessly into existing workflows—reducing administrative
          burden, supporting clinical decisions, and ensuring every image tells
          a complete story. Our commitment is to innovation, patient safety, and
          shaping the future of medical imaging with ethical and transparent AI
          solutions.
        </p>

        {/* Learn More Button */}
        <div className="absolute bg-white py-2 px-3 rounded-xl mt-6">
          <Link
            to="/about"
            className="text-blue-800 font-bold flex items-center space-x-2"
          >
            <span>Learn More</span>
            <AiOutlineArrowRight className="text-xl arrow-slide" />
          </Link>
        </div>
      </div>
    </div>


  


       


        
      </section>
    </div>
  );
};

export default Box;
