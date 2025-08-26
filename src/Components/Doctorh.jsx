import React from "react";
import { Link } from "react-router-dom"; 

const Doctorh = () => {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch 
     py-16 gap-8 px-6 md:px-20">
      {/* Left side image */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div
          style={{ minHeight: "400px" }}
          className="relative flex-1 bg-gray-100 rounded-xl overflow-hidden min-h-[600px]"
        >
          <img src="https://ultraradai.com/_next/static/media/doctorCon.4276dde9.jpg"
            alt="Radiology Case Study"
            loading="lazy"
            decoding="async"
            className="object-cover absolute inset-0 w-full h-full"
            
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="bg-blue-100 text-blue-800 py-1 px-4 rounded-full inline-block">
            <span className="text-sm font-semibold uppercase tracking-wider">
              Case Study
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 md:text-right">
            Medical Case Study
          </h2>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex-1 bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col gap-6 h-full">
                {/* Icon */}
                <div className="bg-blue-300 p-3 rounded-lg flex items-center justify-center flex-shrink-0 w-12 h-12">
                  📄
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Featured Case Study
                  </h3>
                  <div className="text-gray-600 leading-relaxed mb-6 flex-1">
                    <p className="text-gray-700">
                      After 7 days of IV antibiotics and daily wound care,
                      swelling reduced significantly, pain subsided, and CRP
                      levels normalized.
                    </p>
                  </div>

                  
                  {/* Meta Data */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 border-t pt-4 mt-6">
                    <div className="flex items-center">📅 Created: 7/23/2025</div>
                    <div className="flex items-center">🔄 Updated: 8/14/2025</div>
                    <div className="flex items-center">👤 By: superadmin-001</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Doctorh;
