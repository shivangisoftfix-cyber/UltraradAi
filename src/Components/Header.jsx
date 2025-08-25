import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import LogoImage from '../assets/images/ultra.png'

import { AiOutlineArrowRight } from "react-icons/ai";



const Header = () => {
  return (
    <header >
      <div className="container mx-0 flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <Link to="/">
          <img src={LogoImage} alt="logo" className="h-15 w-auto text-7xl" />
        </Link>

        {/* Nav Items */}
        <div className="  flex-1 flex items-center justify-center space-x-4">

          <nav className=" bg-white-700 px-6 py-4 flex space-x-6 text-xl">


            <NavLink to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-900 font-bold" : "text-blue-900 font-bold"
              }
            >

              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-900 font-bold" : "text-blue-900 font-bold"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-900 font-bold" : "text-blue-900 font-bold"
              }
            >
              Contact Us
            </NavLink>


            <NavLink
              to="/article"
              className={({ isActive }) =>
                isActive ? "text-blue-900 font-bold" : "text-blue-900 font-bold"
              }
            >
              News & Article
            </NavLink>
          </nav>
        </div>


        <div className=" absolute right-3  bg-blue-900 px-6 py-2 border-2 rounded-full border-gray-300  ">
          



          {/* Login link */}
          <NavLink
            to="/login"
            className={({ isActive }) =>

              isActive ? "text-white font-bold flex items-center space-x-2" : "text-white font-bold flex items-center space-x-2"
            }
          >
           

            
            

            
            <span>Login</span>
             <AiOutlineArrowRight className="text-xl arrow-slide" />
          </NavLink>
        </div>


      </div>
    </header>
  );
}

export default Header
