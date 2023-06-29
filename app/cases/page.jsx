"use client";
import DefaultLayout from "@/components/Dashboard/layout/DefaultLayout";
import React, { useEffect, useState } from "react";
import Service from "../../utils/Service";
const imgURL = "http://localhost:3005";
import {
  AiFillDelete,
  AiFillEye,
  AiOutlineDownload,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  useEffect(() => {
    getAllCases();
  }, []);

  const getAllCases = async () => {
    try {
      const token = window.localStorage.getItem("token");

      const complaintResponse = await Service.getAllComplaints(token);
      const complaintCases = complaintResponse.data.data.map((complaint) => ({
        ...complaint,
        caseType: "complaint",
      }));

      const crimeReportResponse = await Service.getAllCrimeReports(token);
      const crimeReportCases = crimeReportResponse.data.data.map(
        (crimeReport) => ({
          ...crimeReport,
          caseType: "crimeReport",
        })
      );

      const firResponse = await Service.getAllFIRs(token);
      const firCases = firResponse.data.data.map((fir) => ({
        ...fir,
        caseType: "fir",
      }));

      const allCases = [...complaintCases, ...crimeReportCases, ...firCases];
      setCases(allCases);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately (e.g., show an error message)
    }
  };

  const deleteCase = async (id, caseType) => {
    try {
      const token = window.localStorage.getItem("token");
      if (caseType === "complaint") {
        await Service.deleteComplaintbyId(id, token);
        getAllCases();
      } else if (caseType === "crimeReport") {
        await Service.deleteCrimeReportById(id, token);
        getAllCases();
      } else if (caseType === "fir") {
        await Service.deleteFIRById(id, token);
        getAllCases();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDescription = (rowIndex) => {
    const isExpanded = expandedRows.includes(rowIndex);
    if (isExpanded) {
      setExpandedRows(expandedRows.filter((row) => row !== rowIndex));
    } else {
      setExpandedRows([...expandedRows, rowIndex]);
    }
  };

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="px-2 py-4 font-medium text-black dark:text-white">
                  Case ID
                </th>
                <th className="min-w-[150px] px-2 py-4 font-medium text-black dark:text-white">
                  Description
                </th>
                <th className="min-w-[150px] px-2 py-4 font-medium text-black dark:text-white">
                  Crime Type
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Issued Date
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Status
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {cases.length > 0 ? (
                cases.map((caseItem, index) => (
                  <React.Fragment key={caseItem._id}>
                    <tr>
                      <td className="px-4 py-5">
                        <h5 className="font-medium text-black dark:text-white">
                          {caseItem.case[0]?.caseId}
                        </h5>
                      </td>
                      <td className="px-4 py-5">
                        <div
                          className="flex cursor-pointer items-center"
                          onClick={() => toggleDescription(index)}
                        >
                          {caseItem.case[0]?.casetype === "fir" ? (
                            <>
                              <video
                                width="200"
                                height="500"
                                className=" rounded-lg "
                                controls
                              >
                                <source
                                  src={`${imgURL}${caseItem.video}`}
                                  type="video/mp4"
                                />
                              </video>
                            </>
                          ) : (
                            <>
                              {caseItem.description.length > 30 &&
                              !expandedRows.includes(index) ? (
                                <>
                                  <h5 className="font-medium text-black dark:text-white">
                                    {`${caseItem.description.substring(
                                      0,
                                      30
                                    )}...`}
                                  </h5>
                                  <AiOutlineDown className="text-gray-500 ml-1" />
                                </>
                              ) : (
                                <>
                                  <h5 className="font-medium text-black dark:text-white">
                                    {caseItem.description}
                                  </h5>
                                  {expandedRows.includes(index) ? (
                                    <AiOutlineUp className="text-gray-500 ml-1" />
                                  ) : (
                                    <AiOutlineDown className="text-gray-500 ml-1" />
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </td>

                      <td className="px-4 py-5">
                        <p className="uppercase text-black dark:text-white">
                          {caseItem.case[0]?.casetype}
                        </p>
                      </td>
                      <td className="px-4 py-5">
                        <p className="text-black dark:text-white">
                          {new Date(caseItem.createdAt).toLocaleString()}
                        </p>
                      </td>
                      <td className="px-4 py-5">
                        <p className="inline-flex rounded-full bg-warning bg-opacity-10 px-3 py-1 text-sm font-medium text-warning">
                          {caseItem.progress[0]?.status}
                        </p>
                      </td>
                      <td className="px-4 py-5">
                        <div className="flex items-center space-x-3.5">
                          <button className="hover:text-primary">
                            <AiFillEye />
                          </button>
                          <button
                            className=" hover:text-meta-1"
                            onClick={() =>
                              deleteCase(caseItem._id, caseItem.caseType)
                            }
                          >
                            <AiFillDelete />
                          </button>
                          <button className="hover:text-primary">
                            <AiOutlineDownload />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-5 text-center">
                    No cases found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cases;
