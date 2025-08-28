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
    <section className="py-16 bg-white min-h-screen flex flex-col justify-between">
      {/* Heading */}
     <h2 className="text-3xl md:text-4xl font-bold text-center text-[#153a5b] mb-16 relative 
  after:content-[''] after:block after:w-20 after:h-1 
  after:bg-gradient-to-r after:from-[#0857a0] after:to-[#153a5b] 
  after:mx-auto after:mt-4">
  Letest Article
</h2>


      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {Text.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 leading-tight"
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
              <h2 className="text-xl font-semibold text-gray-900 ">
                {item.title}
              </h2>
            </div>

            {/* Card Learn More */}
            <div className="p-4">
               <Link
                          to="/article"
                          className="text-blue-800 font-bold flex items-center space-x-2"
                        >
                          <span className=" border outline-black py-2 px-2 "> Learn More</span>
                          <AiOutlineArrowRight className="text-xl arrow-slide" />
                        </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Learn More Button */}
      <div className="flex justify-center mt-10 ">
        <Link
                   to="/article"
                   className="text-white font-bold flex items-center space-x-2"
                 >
                   <span className="bg-blue-900 text-white py-3 px-3 rounded-xl">View All Aricle</span>
                   <AiOutlineArrowRight className="text-xl arrow-slide" />
                 </Link>
      </div>
    </section>
  );
};

export default Latestar;
