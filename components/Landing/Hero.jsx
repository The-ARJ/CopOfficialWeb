import React from "react";
import Image from "next/image";
import styles from "../../app/sidebar.module.css";

const Hero = () => {
  return (
    <section className={`${" bg-[#0f172a]"} ${styles.magicpattern}`}>
      <div className="mx-auto grid max-w-screen-xl px-4 pb-8  pt-20 lg:grid-cols-12 lg:gap-8 lg:py-28 xl:gap-0  ">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold  leading-none tracking-wider text-white md:text-5xl xl:text-6xl">
            Report a Crime, <br />& Keep Your Community Safe.
          </h1>
          <p className="mb-6  max-w-2xl font-light text-[#6b7280] md:text-lg lg:mb-8 lg:text-xl ">
            Empowering our community through online crime reporting and enhanced
            police department operations.
          </p>
          <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <a className="text-gray-900 border-gray-200 hover:bg-gray-100 focus:ring-gray-100 border-gray-700 hover:bg-gray-700 focus:ring-gray-800 inline-flex w-full items-center justify-center rounded-lg border px-5 py-3 text-center text-sm font-medium text-white focus:ring-4 sm:w-auto">
              Report a Crime
            </a>
            <a className="text-gray-900  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-200 focus:ring-gray-700 text-gray-400 mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg border border-gray bg-white px-5 py-3 text-sm font-medium hover:bg-gray hover:text-black focus:z-10 focus:outline-none focus:ring-4 sm:w-auto ">
              Download App
            </a>
          </div>
        </div>
        <div className=" lg:col-span-5 lg:mt-0 lg:flex">
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
