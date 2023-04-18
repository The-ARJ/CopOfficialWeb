import { useState } from "react";
import { BiLogInCircle, BiSend, BiX } from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import styles from "../app/sidebar.module.css";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

function ContactBar({ state, setState, toggleSignupBar }) {
  return (
    <div
      className={`fixed top-0 bottom-0 p-2 w-full md:w-[400px] lg:w-[400px] overflow-y-auto text-center bg-[#2d2f5a] transition-all ease-in-out duration-500 ${
        styles.sidebar
      } ${state ? "lg:right-0 right-0" : "-right-full"}`}
    >
      <div className="text-gray-100 text-xl py-4">
        <div className="p-2.5 mt-1 flex justify-between">
          <h1 className="text-[#fff] text-2xl font-bold">Contact Us</h1>
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
              htmlFor="Email"
            >
              Full Name
            </label>
            <input
              className="appearance-none border placeholder:text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Full Name"
              type="text"
              placeholder="Eg, Aayush Raj Joshi"
            />
          </div>
          <div className="mb-4 ">
            <label
              className="block text-gray-200 text-lg text-start font-bold mb-2"
              htmlFor="Email"
            >
              Phone Number
            </label>
            <input
              className="appearance-none border placeholder:text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Phone Number"
              type="text"
              placeholder="Eg, 9818984104"
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
              htmlFor="Subject"
            >
              Subject
            </label>
            <input
              className="appearance-none border placeholder:text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Subject"
              type="text"
              placeholder="Write your subject here..."
            />
          </div>
          <div className="mb-4 ">
            <label
              className="block text-gray-200 text-lg text-start font-bold mb-2"
              htmlFor="Messagage"
            >
              Message
            </label>
            <textarea
              className="appearance-none border placeholder:text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Message"
              type="text"
              rows={4}
              placeholder="Write your message here..."
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            className=" flex gap-2 bg-[#0c66eea6] hover:bg-[#0c66ee] text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
            <BiSend className=" text-2xl" />
          </button>
        </div>
      </form>
      
    </div>
  );
}

export default ContactBar;
