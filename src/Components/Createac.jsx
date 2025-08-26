import React from "react";
import { Link } from "react-router-dom";

const Createac = () => {
  return (
    <div className="bg-gray-100 h-screen w-full font-poppins">
      <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 opacity-95"></div>
          <div
            className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-400 opacity-20"
            style={{ transform: "scale(1.17583)" }}
          ></div>
          <div
            className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-indigo-400 opacity-20"
            style={{ transform: "scale(1.29998)" }}
          ></div>

          <div className="relative z-10 w-full h-full p-12 flex flex-col justify-between">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                Join the Future of Medical Imaging
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Connect with a global network of medical professionals and access
                cutting-edge diagnostic tools powered by AI.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex-1 h-px bg-blue-400"></div>
                <span className="text-blue-200 font-medium">Why Join Us?</span>
                <div className="flex-1 h-px bg-blue-400"></div>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start group">
                  <div className="bg-blue-500 p-1.5 rounded-full mr-4 mt-0.5 group-hover:bg-blue-400 transition-all">
                   
                  
                  </div>
                  <span className="text-blue-100 text-lg group-hover:text-white transition-colors">
                    AI-powered diagnostic assistance
                  </span>
                </li>

                <li className="flex items-start group">
                  <div className="bg-blue-500 p-1.5 rounded-full mr-4 mt-0.5 group-hover:bg-blue-400 transition-all">
                  
                    
                  </div>
                  <span className="text-blue-100 text-lg group-hover:text-white transition-colors">
                    Secure DICOM image storage
                  </span>
                </li>

                <li className="flex items-start group">
                  <div className="bg-blue-500 p-1.5 rounded-full mr-4 mt-0.5 group-hover:bg-blue-400 transition-all">
                   
                  </div>
                  <span className="text-blue-100 text-lg group-hover:text-white transition-colors">
                    Collaborative case discussions
                  </span>
                </li>

                <li className="flex items-start group">
                  <div className="bg-blue-500 p-1.5 rounded-full mr-4 mt-0.5 group-hover:bg-blue-400 transition-all">
                   
                  </div>
                  <span className="text-blue-100 text-lg group-hover:text-white transition-colors">
                    Continuing education resources
                  </span>
                </li>

                <li className="flex items-start group">
                  <div className="bg-blue-500 p-1.5 rounded-full mr-4 mt-0.5 group-hover:bg-blue-400 transition-all">
                 
                  </div>
                  <span className="text-blue-100 text-lg group-hover:text-white transition-colors">
                    Multi-device synchronization
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center text-blue-200 text-sm mt-8">
              <span className="inline-block mr-2">Trusted by</span>
              <span className="font-bold text-white">
                10,000+ medical professionals
              </span>
              <span className="inline-block ml-2">across 42 countries</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md">
            <form className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Dr. John Smith"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                               transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                               transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                               transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
                  />
                </div>

                {/* Profession */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profession
                  </label>
                  <select
                    required
                    className="w-full bg-white border rounded-xl px-3 py-4 text-sm text-gray-700 
                               focus:outline-none focus:ring-2 shadow-sm hover:shadow-md focus:shadow-lg focus:ring-blue-500"
                  >
                    <option value="">Select your profession</option>
                    <option value="radiologist">Radiologist</option>
                    <option value="sonologist">Sonologist</option>
                    <option value="physician">Physician</option>
                    <option value="resident">Resident</option>
                    <option value="medical_student">Medical Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 
                             transition-all duration-300 shadow-lg bg-gray-400 cursor-not-allowed"
                  disabled
                >
                  <span className="flex items-center justify-center">
                  
                    Sign Up Now
                  </span>
                </button>
              </div>

              {/* Already have an account? */}
              <div className="mt-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Already have an account?
                    </span>
                  </div>
                </div>

                {/* ✅ Changed <a> to <Link> */}
                <Link
                  to="/login"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-500 group transition-colors"
                >
                  Sign in to your account
                 
                    
                
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createac;
