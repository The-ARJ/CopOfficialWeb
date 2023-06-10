"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Loginbar from "./Login";
import { BsLayoutSidebarInset } from "react-icons/bs";
import SignupBar from "./SignUp";
import ContactBar from "./Contact";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isLoginBar, setIsLoginBar] = useState(false);
  const [isSignupBar, setIsSignupBar] = useState(false);
  const [isContactBar, setIsContactBar] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
    setIsSignupBar(false);
    setIsLoginBar(false);
  };
  const toggleLoginBar = () => {
    setIsLoginBar(!isLoginBar);
    setIsSignupBar(false);
    setIsMenu(false);
  };

  const toggleSignupBar = () => {
    setIsSignupBar(!isSignupBar);
    setIsLoginBar(false);
    setIsMenu(false);
  };
  const toggleContactBar = () => {
    setIsContactBar(!isContactBar);
    setIsSignupBar(false);
    setIsLoginBar(false);
    setIsMenu(false);
  };

  return (
    <header className="fixed w-full">
      <nav className=" border-gray-200 bg-[#000236] py-2.5">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            {/* <img src="./images/logo.svg" className="h-6 mr-3 sm:h-9" alt="CopOfficial Logo" /> */}
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
              CopOfficial
            </span>
          </Link>
          <div className="flex items-center  gap-4 lg:order-2">
            <div className=" relative ">
              <button
                onClick={toggleLoginBar}
                className="rounded-full border border-[#0c66eea6]  px-4 py-2 text-sm font-medium text-white hover:border-[#0c66ee] sm:mr-2 lg:mr-0 lg:px-5 lg:py-2.5"
              >
                Login
              </button>
            </div>
            <Loginbar
              toggleSignupBar={toggleSignupBar}
              state={isLoginBar}
              setState={setIsLoginBar}
            />

            <button
              onClick={toggleSignupBar}
              className=" hidden rounded-full bg-[#0c66eea6] px-4 py-2 text-sm font-medium text-white hover:bg-[#0c66ee] sm:mr-2 sm:block lg:mr-0 lg:px-5 lg:py-2.5"
            >
              Sign Up
            </button>
            <SignupBar state={isSignupBar} setState={setIsSignupBar} />
            <div className="  ">
              {!isMenu && (
                <BsLayoutSidebarInset
                  onClick={toggleMenu}
                  className=" h-8 w-8 text-[#cbd5e1] lg:hidden"
                />
              )}
              <Sidebar
                toggleContactBar={toggleContactBar}
                state={isMenu}
                setState={setIsMenu}
              />
            </div>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium text-white lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:text-purple-700 text-gray-400 hover:bg-gray-700 border-gray-700 block border-b py-2 pl-3 pr-4 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:text-purple-700 text-gray-400 hover:bg-gray-700 border-gray-700 block border-b py-2 pl-3 pr-4 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:text-purple-700 text-gray-400 hover:bg-gray-700 border-gray-700 block border-b py-2 pl-3 pr-4 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <div
                  onClick={toggleContactBar}
                  className=" text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:text-purple-700 text-gray-400 hover:bg-gray-700 border-gray-700 block cursor-pointer border-b py-2 pl-3 pr-4 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                >
                  Contact
                </div>
              </li>
            </ul>
          </div>
          <ContactBar state={isContactBar} setState={setIsContactBar} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
