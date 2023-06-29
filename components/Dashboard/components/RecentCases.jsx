import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Service from "../../../utils/Service"; // Import your service file

const DashboardCases = () => {
  const [mostRecentCase, setMostRecentCase] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCases();
  }, []);

  const getAllCases = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const complaintResponse = await Service.getAllComplaints(token);
      const crimeReportResponse = await Service.getAllCrimeReports(token);

      // Retrieve only the most recent complaint
      const complaintCases = complaintResponse.data.data
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((complaint) => ({
          ...complaint,
          caseType: "complaint",
        }))
        .slice(0, 1);

      // Retrieve only the most recent crime report
      const crimeReportCases = crimeReportResponse.data.data
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((crimeReport) => ({
          ...crimeReport,
          caseType: "crimereport",
        }))
        .slice(0, 1);

      const allCases = [...complaintCases, ...crimeReportCases];

      // Set the most recent case
      if (allCases.length > 0) {
        setMostRecentCase(allCases[0]);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="col-span-12 rounded-3xl border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
        {!isLoading && mostRecentCase ? (
          <div className="">
            <div className="">
              <div className="mb-3 justify-between gap-4 sm:flex">
                <div>
                  <h5 className="text-xl font-semibold text-black dark:text-white">
                    {mostRecentCase.caseType === "complaint"
                      ? "Complaint"
                      : "Crime Report"}
                  </h5>
                </div>
                <div className="">
                  {mostRecentCase.progress[0]?.status === "pending" && (
                    <span className="text-meta-6">Pending</span>
                  )}
                  {mostRecentCase.progress[0]?.status === "investigation" && (
                    <span className="text-meta-4">Investigation</span>
                  )}
                  {mostRecentCase.progress[0]?.status === "solved" && (
                    <span className="text-meta-3">Solved</span>
                  )}
                </div>
              </div>
              <h5 className="textjus mb-2 mt-4 text-sm text-black dark:text-white">
                {mostRecentCase.description}
              </h5>
            </div>

            <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
              <div className="w-full px-8 sm:w-1/2">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
                  <p className="flex w-full justify-start gap-10 text-sm font-medium text-black dark:text-white">
                    <span>Filed Date</span>
                    <span>
                      {new Date(mostRecentCase.createdAt).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full px-8 sm:w-1/2">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
                  <p className="flex w-full  justify-start gap-10  text-sm font-medium text-black dark:text-white">
                    <span>Verified</span>
                    <span className="text-meta-3">
                      <FaCheck />
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full px-8 sm:w-1/2">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
                  <p className="flex w-full  justify-start gap-10  text-sm font-medium text-black dark:text-white">
                    <span>Progress</span>
                    <span>45%</span>
                  </p>
                </div>
              </div>
              <div className="w-full px-8 sm:w-1/2">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                  <p className="flex w-full  justify-start gap-10  text-sm font-medium text-black dark:text-white">
                    <span>Unknown</span>
                    <span>12%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-gray-500">No cases available</p>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardCases;
