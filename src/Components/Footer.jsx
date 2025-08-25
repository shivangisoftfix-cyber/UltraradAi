import React from 'react';

 const Footer = () => {
  return (
    <footer className="border-t-[#153a5b] border-t-2 w-full bg-gradient-to-br from-white to-maincolor
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
                src="/_next/static/media/FullLogo.e37a01c4.png"
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
            <ul className="space-y-3">
              <li>
                <a className="text-gray-700 hover:text-secondryColor text-sm flex items-center transition-all duration-300" href="/">
                  <span className="w-2 h-2 bg-secondryColor rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-secondryColor text-sm flex items-center transition-all duration-300" href="/about-us">
                  <span className="w-2 h-2 bg-secondryColor rounded-full mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-secondryColor text-sm flex items-center transition-all duration-300" href="/news-articles">
                  <span className="w-2 h-2 bg-secondryColor rounded-full mr-2"></span>
                  News &amp; Articles
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-secondryColor text-sm flex items-center transition-all duration-300" href="/contacts">
                  <span className="w-2 h-2 bg-secondryColor rounded-full mr-2"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg text-gray-800 font-semibold mb-4 pb-2 border-b border-blue-600 inline-block">
              Contact Us
            </h2>
            <ul className="space-y-4 text-gray-700 text-sm mb-6">
              <li className="flex items-start">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                  className="text-secondryColor mr-3 mt-1 flex-shrink-0" height="1em" width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5..."></path>
                </svg>
                <p className="hover:text-primaryColor transition-colors cursor-pointer hover:underline">
                  support@ultraradai.com
                </p>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h3 className="text-gray-800 font-medium mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1CytXY4A1z/"
                  className="bg-white text-secondryColor hover:bg-secondryColor hover:text-white p-3 rounded-full transition-all duration-300 shadow-md flex items-center justify-center"
                  aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  {/* Facebook Icon */}
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                    className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M504 256C504 119 393..."></path>
                  </svg>
                </a>

                <a href="https://x.com/UltraradAI?s=09"
                  className="bg-white text-secondryColor hover:bg-secondryColor hover:text-white p-3 rounded-full transition-all duration-300 shadow-md flex items-center justify-center"
                  aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  {/* Twitter/X Icon */}
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                    className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.68 3.06L12.69..."></path>
                  </svg>
                </a>

                <a href="https://www.instagram.com/ultraradai?igsh=MWt2Z2V6d2s2dGp5MQ=="
                  className="bg-white text-secondryColor hover:bg-secondryColor hover:text-white p-3 rounded-full transition-all duration-300 shadow-md flex items-center justify-center"
                  aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  {/* Instagram Icon */}
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                    className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224.1 141c-63.6 0..."></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-700 text-sm mb-4 md:mb-0">© 2025 Ultrarad AI. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a className="text-gray-700 hover:text-secondryColor text-sm transition-all duration-300" href="/info/refund-policy">
              Refund Policy
            </a>
            <a className="text-gray-700 hover:text-secondryColor text-sm transition-all duration-300" href="/info/terms-">
              Terms &amp; Conditions
            </a>
            <a className="text-gray-700 hover:text-secondryColor text-sm transition-all duration-300" href="/info/privacy-policy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default End;
