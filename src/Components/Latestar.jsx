import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import radiology from "../assets/images/radiology.png";
import newsarticale from "../assets/images/newsarticale.png";
import mri from "../assets/images/mri.png";

const Text = [
  {
    id: 1,
    category: "AI in Radiology",
    date: "Fri Aug 08 2025",
    title:
      "AI isn’t replacing radiologists. Instead, they’re using it to tackle time-sucking administrative tasks.",
    image: radiology,
  },
  {
    id: 2,
    category: "AI in Radiology",
    date: "Mon Aug 18 2025",
    title: "AI hasn’t killed radiology, but it is changing it",
    image: newsarticale,
  },
  {
    id: 3,
    category: "Radiation Risk",
    date: "Fri Aug 08 2025",
    title:
      "Do CT Scans Cause Cancer? Study Finds Imaging May Fuel 1 in 20 U.S. Cases Each Year",
    image: mri,
  },
];

const Latestar = () => {
  return (
    <section className="py-16 bg-blue-300 min-h-screen flex flex-col justify-between">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-12 underline-offset-0 decoration-blue-600">
        Latest Article
      </h1>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {Text.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-xl font-bold"
            />

            {/* Content */}
            <div className="p-4">
              <div className="flex justify-between items-center text-sm text-blue-600 font-medium">
                <span className="px-3 rounded-xl bg-blue-300">{item.category}</span>
                <span className="text-gray-500">{item.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mt-2">
                {item.title}
              </h2>
            </div>

            {/* Card Learn More */}
            <div className="p-4 ">
              <Link
                to={item.link || "#"}
                className="inline-flex items-center justify-center text-black font-medium 
                border border-black
                 shadow-md  rounded-lg px-10 py-2 hover:bg-blue-50 transition"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Learn More Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/about"
          className="bg-blue-600 text-white font-bold flex items-center space-x-2 py-3 px-6
           rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          <span>Learn More</span>
          <AiOutlineArrowRight className="text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default Latestar;
