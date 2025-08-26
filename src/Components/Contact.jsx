import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          <img
            alt="logo"
            loading="lazy"
            width="240"
            height="100"
            src="https://ultraradai.com/_next/static/media/rad1.98dba896.jpg"
            className="object-contain"
          />
        </Link>
      </div>

      {/* Navbar */}
      <nav className="hidden lg:flex items-center space-x-8">
        <Link
          to="/"
          className="font-normal transition-all duration-200 text-[#274760] hover:text-blue-600 hover:scale-105"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="font-normal transition-all duration-200 text-[#274760] hover:text-blue-600 hover:scale-105"
        >
          About Us
        </Link>
        <Link
          to="/news-articles"
          className="font-normal transition-all duration-200 text-[#274760] hover:text-blue-600 hover:scale-105"
        >
          News &amp; Articles
        </Link>
        <Link
          to="/contacts"
          className="font-normal transition-all duration-200 text-[#274760] hover:text-blue-600 hover:scale-105"
        >
          Contact Us
        </Link>

        {/* Login Button */}
        <Link
          to="/login"
          className="w-max bg-gradient-to-r from-[#2d7ac0] to-[#153a5b] text-white px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-md transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          Login
         
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button className="p-2 rounded-md focus:outline-none text-[#274760]">
          
        </button>
      </div>
    </div>
  )
}

export default Contact
