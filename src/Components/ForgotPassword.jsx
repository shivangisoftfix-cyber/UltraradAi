import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="bg-gray-100 h-screen w-full font-poppins">
      <div className="min-h-screen bgImage flex items-center justify-center bg-cover bg-center">
        <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md sm:max-w-lg">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Forgot Password?</h1>
            <p className="text-sm text-gray-600">
              Enter your email to reset your password.
            </p>
          </div>

          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                className="w-full p-3 border-b border-gray-300 focus:outline-none"
                placeholder="Enter your email"
                required
                type="email"
                defaultValue=""
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg
                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-maincolor"
            >
              Send OTP
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Remembered your password?{" "}
          <Link to ="/login">
              Sign in
              </Link>
            
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
