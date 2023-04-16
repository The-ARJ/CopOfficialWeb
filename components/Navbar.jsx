"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Loginbar from "./Login";
import { BsLayoutSidebarInset } from "react-icons/bs";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isLoginBar, setIsLoginBar] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  const toggleLoginBar = () => {
    setIsLoginBar(!isLoginBar);
  };

  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link href="/" className="flex items-center">
            {/* <img src="./images/logo.svg" className="h-6 mr-3 sm:h-9" alt="CopOfficial Logo" /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              CopOfficial
            </span>
          </Link>
          <div className="flex items-center  gap-4 lg:order-2">
            <div className=" relative ">
              <button
                onClick={toggleLoginBar}
                className="text-white rounded-full font-medium  text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 border border-[#0c66eea6] hover:border-[#0c66ee]"
              >
                Login
              </button>
            </div>
            <Loginbar state={isLoginBar} setState={setIsLoginBar} />

            <button className=" hidden sm:block text-white rounded-full font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 bg-[#0c66eea6] hover:bg-[#0c66ee]">
              Sign Up
            </button>

            <div className="  ">
              {!isMenu && (
                <BsLayoutSidebarInset
                  onClick={toggleMenu}
                  className=" h-8 w-8 lg:hidden text-[#cbd5e1]"
                />
              )}
              <Sidebar state={isMenu} setState={setIsMenu} />
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
