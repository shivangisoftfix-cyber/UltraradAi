import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LiaCapsulesSolid } from "react-icons/lia";
import { MdDone } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const Plan = () => {
  return (
    <section id="plans-show">
      <div className="flex flex-col justify-center items-center px-5 py-10 bg-secondryColor min-h-screen">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-white mb-2">Choose Your Plan</h1>
        <h2 className="text-lg text-gray-300 mb-8">Unlock endless possibilities</h2>

        {/* Free Plan Card */}
        <div className="max-w-5xl w-full">
          <div className="relative bg-blue-50 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-blue-500/30 hover:-translate-y-1">
            {/* Limited Time Offer Ribbon */}
            <div className="absolute top-0 right-0 bg-secondryColor text-white text-sm font-bold px-4 py-1 transform rotate-45 translate-x-8 translate-y-6 w-48 text-center">
              LIMITED TIME OFFER
            </div>

            <div className="p-10 grid md:grid-cols-2 gap-10">
              {/* Left Side (Plan Info) */}
              <div className="flex flex-col items-center text-center md:border-r md:border-gray-200 md:pr-8">
                {/* Icon Above Title */}
                <div className="relative mb-6">
                  <div className="absolute -inset-4  rounded-full opacity-30"></div>
                  <div className="relative bg-blue-900 p-6 rounded-full text-white">
                    <LiaCapsulesSolid className="text-4xl " />
                  </div>
                </div>

                {/* Plan Title */}
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Free Plan</h2>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-xl  text-blue-900">₹0</span>
                  <span className="text-gray-500 ml-2">/ 30 days</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  Perfect for trying out our platform with no risk
                </p>

                {/* Start Free Trial Button */}
                <Link to="/login" className="mt-4 w-full py-4 px-8 bg-secondryColor text-white font-semibold
                 text-lg rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all bg-blue-900 space-x-3
                  flex items-center justify-center">
                  <CiStar className="text-2xl " />
                  Start Free Trial
                </Link>
              </div>

              {/* Right Side (Features) */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                  Included Features
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 flex-shrink-0">
                     <MdDone className="bg-blue-900 text-white rounded-xl" />
                    </div>
                    <span className="text-gray-700 text-lg">10 radiology interpretations</span>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 flex-shrink-0">
                        <MdDone className="bg-blue-900 text-white rounded-xl" />
                    </div>
                    <span className="text-gray-700 text-lg">20 Tara queries</span>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 flex-shrink-0">
                      <MdDone className="bg-blue-900 text-white rounded-xl" />
                    </div>
                    <span className="text-gray-700 text-lg">30 days full access</span>
                  </li>
                </ul>

                {/* Security Note */}
                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <CiLock  className="text-3xl"/>
                    </div>
                    <span className="text-gray-600">Secure &amp; confidential</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="bg-gray-100 px-8 py-4 text-center border-t">
              <p className="text-gray-600">
                <span className="font-semibold">No commitments</span> - cancel anytime
              </p>
            </div>
          </div>

          {/* Premium CTA */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need more interpretations or features?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Sign up to unlock our full range of premium plans with advanced features and priority support.
            </p>
            <Link to="/login" className="py-3 px-8 bg-white text-blue-600 font-semibold rounded-lg
            text-bold hover:bg-gray-100 transition shadow-md">
              Explore Premium Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
