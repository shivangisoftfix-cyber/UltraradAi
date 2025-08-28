import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/images/ultra.png";

// ✅ Correct imports for social media icons
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-[#153a5b] border-t-2 w-full bg-gradient-to-br from-blue-300 to-maincolor
     text-white pt-16 pb-8 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <img
                alt="Ultrarad AI Logo"
                loading="lazy"
                width="250"
                height="80"
                decoding="async"
                src={logo}
                style={{ color: "transparent" }}
              />
            </div>
            <p className="text-gray-700 text-sm mb-6">
              Revolutionizing radiology with AI-powered diagnostic tools that enhance accuracy,
              save time, and transform patient care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:mx-auto">
            <h2 className="text-lg text-gray-800 font-semibold mb-4 pb-2 border-b border-blue-600 inline-block">
              Quick Links
            </h2>
            <ul className="space-y-3 list-disc list-inside text-blue-900">
              {[
                { to: "/", label: "Home" },
                { to: "/about-us", label: "About Us" },
                { to: "/news-articles", label: "News & Articles" },
                { to: "/contacts", label: "Contact Us" },
              ].map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `transition-all duration-300 ${
                        isActive
                          ? "text-secondryColor font-semibold"
                          : "hover:text-secondryColor"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg text-gray-800 font-semibold mb-4 pb-2 border-b border-blue-600 inline-block">
              Contact Us
            </h2>
            <ul className="space-y-4 text-gray-700 text-sm mb-6">
              <li>
                <p className="hover:text-primaryColor transition-colors cursor-pointer hover:underline">
                  support@ultraradai.com
                </p>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h3 className="text-gray-800 font-medium mb-3">Follow Us</h3>
              <div className="flex space-x-4">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1CytXY4A1z/"
                  className="bg-[#1877F2] hover:brightness-90 p-3 rounded-full transition-transform transform hover:scale-110 shadow-md flex items-center justify-center"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareFacebook className="text-white text-xl" />
                </a>

                {/* Twitter (X) */}
                <a
                  href="https://x.com/UltraradAI?s=09"
                  className="bg-black hover:brightness-90 p-3 rounded-full transition-transform transform hover:scale-110 shadow-md flex items-center justify-center"
                  aria-label="Twitter (X)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="text-white text-xl" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ultraradai?igsh=MWt2Z2V6d2s2dGp5MQ=="
                  className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:brightness-90 p-3 rounded-full transition-transform transform hover:scale-110 shadow-md flex items-center justify-center"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-700 text-sm mb-4 md:mb-0">
            © 2025 Ultrarad AI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <NavLink
              to="/info/refund-policy"
              className={({ isActive }) =>
                `text-sm transition-all duration-300 ${
                  isActive
                    ? "text-secondryColor font-semibold"
                    : "text-gray-700 hover:text-secondryColor"
                }`
              }
            >
              Refund Policy
            </NavLink>
            <NavLink
              to="/info/terms-conditions"
              className={({ isActive }) =>
                `text-sm transition-all duration-300 ${
                  isActive
                    ? "text-secondryColor font-semibold"
                    : "text-gray-700 hover:text-secondryColor"
                }`
              }
            >
              Terms &amp; Conditions
            </NavLink>
            <NavLink
              to="/info/privacy-policy"
              className={({ isActive }) =>
                `text-sm transition-all duration-300 ${
                  isActive
                    ? "text-secondryColor font-semibold"
                    : "text-gray-700 hover:text-secondryColor"
                }`
              }
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
