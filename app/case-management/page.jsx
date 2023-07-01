"use client";
import React, { useEffect, useState, useContext } from "react";
import DefaultLayout from "@/components/Dashboard/layout/DefaultLayout";
import Service from "../../utils/Service";
import { AiFillDelete, AiFillEye, AiOutlineDownload } from "react-icons/ai";
import CaseModal from "../../components/Dashboard/components/CaseModal";
const imgURL = "http://localhost:3005";
import { UserContext } from "../../utils/UserContext";
import CreateCaseDropdown from "@/components/Dashboard/components/CreateCaseDropdown";

const Cases = () => {
  const [cases, setCases] = useState([]);
  const { user, loading, error, dispatch } = useContext(UserContext);
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // Declare a new state variable for updated cases
  const [updatedCases, setUpdatedCases] = useState([]);
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

  const toggleDescription = (rowIndex, caseItem) => {
    setExpandedRows([...expandedRows, rowIndex]);
  };
  const togglemodal = (rowIndex, caseItem) => {
    setSelectedCase(caseItem);
    setShowModal(true);
  };

  const getUserDetails = (cases) => {
    const token = window.localStorage.getItem("token");
    return Promise.all(
      cases.map((detail) =>
        Service.getUserById(detail.owner, token)
          .then((res) => res.data.user)
          .catch((err) => console.error(err))
      )
    );
  };

  useEffect(() => {
    // Call the getUserDetails function to fetch user details
    getUserDetails(cases)
      .then((userDetails) => {
        // Update the updatedCases data with owner names
        const newUpdatedCases = cases.map((caseItem, index) => ({
          ...caseItem,
          ownerName: `${userDetails[index]?.firstName || "Unknown"} ${
            userDetails[index]?.lastName || "Owner"
          }`,
        }));

        // Sort the cases by case ID in descending order
        newUpdatedCases.sort((a, b) => b.case[0]?.caseId - a.case[0]?.caseId);

        setUpdatedCases(newUpdatedCases); // Set the updated cases here
      })
      .catch((error) => {
        console.error("Failed to fetch user details:", error);
        // Handle the error if needed
      });
  }, [cases]);

  console.log(updatedCases);
  return (
    <DefaultLayout>
      <>
        <div className="flex justify-between py-2">
          <div className=" flex font-bold md:text-2xl">All Cases</div>
          <CreateCaseDropdown />{" "}
        </div>
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="px-2 py-4 font-medium text-black dark:text-white">
                    Case ID
                  </th>
                  <th className="min-w-[150px] px-2 py-4 font-medium text-black dark:text-white">
                    descripion
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
                {updatedCases.length > 0 ? (
                  updatedCases.map((caseItem, index) => (
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
                            onClick={() => toggleDescription(index, caseItem)}
                          >
                            {(user && user.role === "admin") ||
                            user.role === "police" ? (
                              <h5 className="font-medium text-black dark:text-white">
                                {caseItem.ownerName}
                              </h5>
                            ) : caseItem.case[0]?.casetype === "fir" ? (
                              <video
                                width="200"
                                height="500"
                                className="rounded-lg"
                                controls
                              >
                                <source
                                  src={`${imgURL}${caseItem.video}`}
                                  type="video/mp4"
                                />
                              </video>
                            ) : caseItem.description.length > 30 ? (
                              <h5
                                onClick={() => togglemodal(index, caseItem)}
                                className="font-medium text-black dark:text-white"
                              >
                                {`${caseItem.description.substring(0, 30)}...`}
                              </h5>
                            ) : (
                              <h5 className="font-medium text-black dark:text-white">
                                {caseItem.description}
                              </h5>
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
                            <button
                              className="hover:text-primary"
                              onClick={() => togglemodal(index, caseItem)}
                            >
                              <AiFillEye />
                            </button>
                            {user &&
                              (user.role === "police" ||
                                user.role === "admin") && (
                                <button
                                  className="hover:text-meta-1"
                                  onClick={() =>
                                    deleteCase(caseItem._id, caseItem.caseType)
                                  }
                                >
                                  <AiFillDelete />
                                </button>
                              )}
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
                    <td colSpan="6" className="px-4 py-5 text-center">
                      No cases found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {showModal && (
          <CaseModal
            caseData={selectedCase}
            userData={user}
            onClose={() => setShowModal(false)}
          />
        )}
      </>
    </DefaultLayout>
  );
};

export default Cases;
