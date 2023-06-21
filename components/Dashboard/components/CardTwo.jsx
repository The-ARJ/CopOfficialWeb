import React, { useEffect, useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { FcFeedback } from "react-icons/fc";
import Link from "next/link";
import Service from "../../../utils/Service";

const CardTwo = () => {
  const [crimeReportCount, setCrimeReportCount] = useState(0);

  useEffect(() => {
    fetchCrimeReportCount();
  }, []);

  const fetchCrimeReportCount = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const crimeReportResponse = await Service.getAllCrimeReports(token);
      const totalCrimeReports = crimeReportResponse.data.data.length;
      setCrimeReportCount(totalCrimeReports);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-3xl border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <FcFeedback />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            Crime Report
          </h4>
          <p className="mt-4 text-lg font-medium">
            Total Reports:{" "}
            <span className="gap-1 fill-meta-3 text-lg font-medium text-meta-3">
              {crimeReportCount}
            </span>
          </p>
        </div>
        <Link href="/crime-report" className="cursor-pointer text-3xl">
          <TfiWrite />
        </Link>
      </div>
    </div>
  );
};

export default CardTwo;
