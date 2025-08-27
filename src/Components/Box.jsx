
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
        <h1 className="flex align-center items-center text-3xl font-extrabold justify-center
         text-blue-900 mb-10"> Our Value</h1>
       <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 py-10"
    >
      {iconList.map((item, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg shadow-md p-6 text-center h-60 
          w-[90%] mx-auto flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg group"
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
  

        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-start py-20 mx-10 gap-10">
          <img
            src={logo}
            alt="About Ultrarad AI"
            className="min-h-[50vh] w-[40%] shadow-md rounded-xl"
          />

          <div className="ml-0 md:ml-10">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">About Us</h1>
           
            <p className="text-gray-600 max-w-md leading-relaxed">
              Ultrarad AI is a radiologist-built platform designed to revolutionize
              the way medical imaging is interpreted, reported, and understood.

              Our mission is to empower healthcare professionals with advanced
              AI-driven tools that enhance diagnostic accuracy, improve reporting
              efficiency, and uncover insights that traditional methods often miss.
            </p>
          
        <div className=" absolute  bg-blue-900 py-2 px-3  rounded-xl mt-10">
            <Link to="/about" className="text-white font-bold flex items-center space-x-2">
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
