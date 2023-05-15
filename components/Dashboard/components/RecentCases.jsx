import React from "react";
import { FaCheck } from "react-icons/fa";

const DashboardCases = () => {
  return (
    <>
      <div className="col-span-12 rounded-3xl  border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
        <div className="mb-3 justify-between gap-4 sm:flex">
          <div>
            <h5 className="text-xl font-semibold text-black dark:text-white">
              Complaint
            </h5>
            <h5 className="mt-4 text-sm mb-2 text-black dark:text-white">
              This is Complaint Sub Heading
            </h5>
          </div>
          <div className=" text-meta-3">Open</div>
        </div>

        <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
          <div className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span> Filed Date </span>
                <span> 2023/11/29 </span>
              </p>
            </div>
          </div>
          <div className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span> Verified </span>
                <span className=" text-meta-3">
                  {" "}
                  <FaCheck />{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span> Progress </span>
                <span> 45% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span> Unknown </span>
                <span> 12% </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCases;
