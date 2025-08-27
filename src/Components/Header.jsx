import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoImage from "../assets/images/ultra.png";
import {
  AiOutlineArrowRight,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineFileText,
} from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md  w-full fixed top-0 left-0 bg-white z-50">
      <div className="container mx-2 flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <Link to="/">
          <img src={LogoImage} alt="logo" className="h-17 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 text-lg font-bold text-blue-900">
          <NavLink to="/" className="hover:text-blue-700">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-700">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-700">
            Contact Us
          </NavLink>
          <NavLink to="/article" className="hover:text-blue-700">
            News & Article
          </NavLink>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block absolute right-3 bg-blue-900 px-6 py-2 border-2 rounded-full
         border-gray-300">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold flex items-center space-x-2"
                : "text-white font-bold flex items-center space-x-2"
            }
          >
            <span>Login</span>
            <AiOutlineArrowRight className="text-xl arrow-slide" />
          </NavLink>
        </div>

        {/* Menu Icon (Mobile) */}
        <button
          className="md:hidden text-2xl text-blue-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-6 px-8 space-y-6 font-bold text-blue-900
         flex flex-col items-center">
          {/* Home */}
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center gap-1"
          >
            <AiOutlineHome className="text-3xl text-blue-900" />
            <span className="text-blue-900 text-sm">Home</span>
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center gap-1"
          >
            <AiOutlineInfoCircle className="text-3xl text-blue-900" />
            <span className="text-blue-900 text-sm">About</span>
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center gap-1"
          >
            <AiOutlineMail className="text-3xl text-blue-900" />
            <span className="text-blue-900 text-sm">Contact Us</span>
          </NavLink>

          {/* News & Article */}
          <NavLink
            to="/article"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center gap-1">
          
            <AiOutlineFileText className="text-3xl text-blue-900" />
            <span className="text-blue-900 text-sm">News & Article</span>
          </NavLink>

          {/* Login Button */}
          <div className="bg-blue-900 px-6 py-2 border-2 rounded-full border-gray-300 w-fit mx-auto mt-4">
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold flex items-center gap-2"
                  : "text-white font-bold flex items-center gap-2"
              }
            >
              <span>Login</span>
              <AiOutlineArrowRight className="text-xl arrow-slide" />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
