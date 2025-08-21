import React from 'react'
import { FaArrowLeft, FaLock, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="flex   justify-center   min-h-screen px-4 bg-gray-300">
      <div className="w-full  max-w-md bg-white shadow-lg  relative p-6   h-screen max-h-9/10 ">

      {/*Go back*/}
      <div className="top-0">
        <Link to="/" className=" flex  text-blue-500 hover:underline">
        <FaArrowLeft className="mr-1"/>
        GO BACK
        
        </Link>
      </div>
      <div className="flex  mb-4 justify-center">
        <div className="bg-blue-100  rounded-full p-4">
          <FaLock className="text-blue-500 text-2xl"/>

        </div>
      </div>
      

      <h2 className="text-center font-black  mb-1 text-2xl">
        Welcome Back</h2>
        
        
        <p1 className="text-center font-gray justify-center text-xl">
          sign in to access your medical dashboard
        </p1>

        
      <div className="my-10">
        <lebel className=" mb-1 text-lg">
          Email Address 
        </lebel>
        <div className="flex items-center border rounded-md px-3 py-2">
          <FaUser className="text-gray-400 mr-2"/>
          <input type="email" placeholder="doctor@example.com"
          className=" w-full outline-none text-gray-700"/>

        </div>

      </div>

       <div className="my-4">
        <lebel className=" mb-1 text-lg">
          Password
        </lebel>
        <div className="flex items-center border rounded-md px-3 py-2">
          <FaLock  className="text-gray-400 mr-2"/>
          
          <input type="password" placeholder="......."
          className=" w-full outline-none text-gray-700"/>

        </div>

      </div>


      <div className="flex justify-between items-center mb-4">
        <label className=" flex items-center  text-sm text-gray-600">
          <input type="checkbox" className="mr-2"/>Remember me
        </label>
        <Link to="/forgotpassword" className="text-sm  text-blue-500 hover:underline">
        Forgot Password
        </Link>

      </div>

     <button className="w-full  bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md  font-medium shadow">
      Sign In
     </button>
     <div className='text-center justify-betweens my-6'>

     <p1 className="text-center text-sm text-gray-600 mt-4">
      New to our platform?{" "}
     
      

     </p1>
     </div>

     <div className='text-center justify-between'>
       <Link to="/register" className=' hover:underline text-xl text-blue-500'>
      Create an account
      
      </Link>
     </div>




      </div>

    </div>
  )
}

export default Login