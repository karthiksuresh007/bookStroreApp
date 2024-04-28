import React from 'react'
import {Link} from "react-router-dom"
import Login from  './Login'
import { useForm } from "react-hook-form"

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
       // Handle form submission here (e.g., display a success message)
       console.log(data); // Log submitted data for debugging
      };
  return (<>
     <div className="flex h-screen items-center justify-center">
      <div  className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method ="dialog">
          <Link method="dialog">
            {/* Close button will close the modal */}
            <Link to="/"type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </Link>
          
          <h3 className="font-bold text-lg">Signup</h3>
          
          <div className="mt-4 space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
             {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          
          {/* Password */}
          <div className="mt-4 space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          
          {/* Login Button and Registration Link */}
          <div className="flex justify-around items-center mt-6">
            <button type="submit" className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
              Signup
            </button>
            <p>Already have account? 
                <button
                
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => 
                  document.getElementById("my_modal_3").showModal()
                }
                >
                  Login
                </button>{" "}
                <Login />
                </p>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
