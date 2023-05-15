import React from "react";
import Image from "next/image";
import styles from "../app/sidebar.module.css";

const Hero = () => {
  return (
    <section className={`${" bg-[#0f172a]"} ${styles.magicpattern}`}>
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8  mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12  ">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold  tracking-wider leading-none md:text-5xl xl:text-6xl text-white">
            Report a Crime, <br />& Keep Your Community Safe.
          </h1>
          <p className="max-w-2xl  mb-6 font-light text-[#6b7280] lg:mb-8 md:text-lg lg:text-xl ">
            Empowering our community through online crime reporting and enhanced
            police department operations.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
              Report a Crime
            </a>
            <a className="inline-flex  items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:ring-gray-700 hover:bg-gray text-gray-400 border-gray hover:text-black ">
              Download App
            </a>
          </div>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/assets/police.png"
            alt="copofficial"
            width={400}
            height={400}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
