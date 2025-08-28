import React, { useState } from "react";
import { Mail, User, MessageSquare, Share2 } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("✅ Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section>
      {/* Title */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="font-semibold">
            <a href="/" className="hover:underline">Home</a> /
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              {" "}Contact Us
            </span>
          </p>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg w-full max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Info Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Connect With Us
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions or want to discuss a project? Reach out via email.
            </p>

            {/* Email Us Box */}
            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-gray-200 shadow-sm mb-6">
              <div className="p-3 rounded-lg bg-white shadow-sm text-purple-600 mr-4">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Email Us</h3>
                <p className="text-gray-600">support@ultraradai.com</p>
                <button className="mt-2 inline-block text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors">
                  Send a message →
                </button>
              </div>
            </div>

            {/* Follow Us Box (styled like Email Us box) */}
            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-gray-200 shadow-sm">
              <div className="p-3 rounded-lg bg-white shadow-sm text-purple-600 mr-4">
                <Share2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/share/1CytXY4A1z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white shadow-sm text-gray-700 hover:bg-gray-100 hover:scale-105 transition"
                  >
                    <FaFacebookF className="text-lg" />
                  </a>
                  <a
                    href="https://x.com/UltraradAI?s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white shadow-sm text-gray-700 hover:bg-gray-100 hover:scale-105 transition"
                  >
                    <FaXTwitter className="text-lg" />
                  </a>
                  <a
                    href="https://www.instagram.com/ultraradai?igsh=MWt2Z2V6d2s2dGp5MQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white shadow-sm text-gray-700 hover:bg-gray-100 hover:scale-105 transition"
                  >
                    <FaInstagram className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-h-[120px]"
                  required
                />
              </div>
            </div>

            {/* Button */}
           <button
  type="submit"
  className="group w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-600
    hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
    focus:ring-offset-2 transition-all duration-200 shadow-sm"
>
  <span className="flex items-center gap-2">
    <IoIosSend className="text-3xl transform transition-transform duration-300 
    group-hover:-translate-y-1 active:-translate-y-1" />
    Send Message
  </span>
</button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
