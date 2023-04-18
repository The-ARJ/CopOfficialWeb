import { useState } from "react";
import { BiLogInCircle, BiX } from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import styles from "../app/sidebar.module.css";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

function SignupBar({ state, setState }) {
  return (
    <div
      className={`fixed top-0 bottom-0 p-2 w-full md:w-[400px] lg:w-[400px] overflow-y-auto text-center bg-[#2d2f5a] transition-all ease-in-out duration-500 ${
        styles.sidebar
      } ${state ? "lg:left-0 left-0" : "-left-full"}`}
    >
      <div className="text-gray-100 text-xl py-4">
        <div className="p-2.5 mt-1 flex justify-between">
          <h1 className="text-[#fff] text-2xl font-bold">CopOfficial SignUp</h1>
          <span onClick={() => setState(!state)}>
            <FiMinimize className="bi hover:scale-75 bi-x cursor-pointer  w-auto h-8" />
          </span>
        </div>
      </div>
      <form className="mx-4 mt-8 ">
        <div className=" mb-8">
          <div className="mb-4 ">
            <label
              className="block text-gray-200 text-lg text-start font-bold mb-2"
              htmlFor=" Full Name"
            >
              Full Name
            </label>
            <input
              className="appearance-none border placeholder:text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=" Full Name"
              type=" Full Name"
              placeholder="Eg, Aayush Raj Joshi"
            />
          </div>

          <div className="mb-4 ">
            <label
              className="block text-gray-200 text-lg text-start font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="appearance-none border placeholder:text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-4 ">
            <label
              className="block text-gray-200 text-lg text-start font-bold mb-2"
              htmlFor=" Full Name"
            >
              Phone Number
            </label>
            <input
              className="appearance-none border placeholder:text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id=" Phone Number"
              type="Phone Number"
              placeholder="Eg, 9818984104"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-200 text-start  text-lg font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-200 text-start  text-lg font-bold mb-2"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 placeholder:text-sm leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <a
            className="inline-block align-baseline text-justify font-bold text-sm text-gray-400 hover:text-white"
            href="#"
          >
            By sign up you agree the terms and conditions.
          </a>
          <button
            className=" flex gap-2 bg-[#0c66eea6] hover:bg-[#0c66ee] text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            SignUp
            <BiLogInCircle className=" text-2xl" />
          </button>
        </div>
      </form>
      <div className="my-8  mx-16">
        <div className=" mb-2 text-white">SignUp With</div>
        <div className="mb-4  bg-white h-[1px]"></div>

        <div className="flex justify-center gap-8 items-center mt-4">
          <button
            className="bg-red-600 hover:scale-105
           rounded-full p-2 m-1"
          >
            <FaGoogle className="text-white text-xl " />
          </button>
          <button className="bg-blue-600 rounded-full hover:scale-105 p-2 m-1">
            <FaFacebook className="text-white text-xl" />
          </button>
          <button className="bg-black rounded-full hover:scale-105 p-2 m-1">
            <FaApple className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupBar;
