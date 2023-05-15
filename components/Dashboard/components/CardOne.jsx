import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { FcFeedback } from "react-icons/fc";
import Link from "next/link";

const CardOne = () => {
  return (
    <div className="rounded-3xl  border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <FcFeedback />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            Complaint
          </h4>
          <p className="mt-4 text-lg font-medium">
            Total complains:{" "}
            <span className=" gap-1 fill-meta-3 text-lg font-medium text-meta-3">
              4
            </span>
          </p>
        </div>
        <Link href="/complaint" className=" cursor-pointer text-3xl ">
          <IoCreateOutline />
        </Link>
      </div>
    </div>
  );
};

export default CardOne;
