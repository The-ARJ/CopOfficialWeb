import React, { useState, useEffect } from "react";
import { MdClose, MdPrint, MdVerified } from "react-icons/md";
import { imgURL } from "../../../utils/Service";
import UserImage from "../../../public/assets/user/user-01.png";
import Image from "next/image";

const CaseModal = ({ caseData, onClose, userData }) => {
  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState("pending");
  const [progress, setProgress] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleVerifiedToggle = () => {
    setVerified(!verified);
    if (verified) {
      setStatus("pending"); // Reset the status to 'pending' when unverifying the case
    }
    setShowMessage(true); // Show the verification message

    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide the verification message after 3 seconds
  };

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus);
    if (selectedStatus === "investigation") {
      setProgress("initial investigation");
    } else if (selectedStatus === "solved") {
      setProgress("investigation complete");
    } else if (selectedStatus === "pending") {
      setProgress("not started");
    }
  };

  const handleProgressChange = (event) => {
    const selectedProgress = event.target.value;
    setProgress(selectedProgress);

    if (selectedProgress === "investigation complete") {
      setStatus("solved");
    }
  };
  return (
    <div className="fixed inset-0 left-64 flex items-center justify-center">
      <div className="   mx-auto md:max-w-5xl">
        <div className=" rounded-md border border-stroke bg-white px-10 py-6 shadow-lg dark:border-strokedark dark:bg-boxdark">
          <div className="flex items-center justify-between">
            <h2 className="font-bold md:text-lg">
              Case ID: {caseData.case[0]?.caseId}
            </h2>
            <h2 className="font-bold uppercase md:text-lg">
              Case Type: {caseData.caseType}
            </h2>
            <div className=" flex items-center gap-4">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded text-2xl">
                <MdPrint className="text-meta-6" />
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded text-2xl"
                onClick={onClose}
              >
                <MdClose className="text-meta-1" />
              </button>
            </div>
          </div>

          <p className="mt-8 text-justify">{caseData.description}</p>
          {caseData.image && (
            <Image
              height={200}
              width={200}
              src={`${imgURL}${caseData.image}`}
              alt=""
              className=" "
            />
          )}

          {showMessage && (
            <div
              className={`fixed z-50 rounded-md py-2 ${
                verified ? "text-meta-3" : "text-meta-6"
              }`}
            >
              {verified ? "Case verified!" : "Case unverified!"}
            </div>
          )}

          <div className=" mt-10 rounded-lg border  px-4 py-2 ">
            {userData.role === "user" ? (
              <div className="">
                {caseData.progress[0]?.status === "pending" && (
                  <span className="text-meta-6">Pending</span>
                )}
                {caseData.progress[0]?.status === "investigation" && (
                  <span className="text-meta-4">Investigation</span>
                )}
                {caseData.progress[0]?.status === "solved" && (
                  <span className="text-meta-3">Solved</span>
                )}
              </div>
            ) : (
              <form className="flex items-center gap-10">
                <div
                  onClick={handleVerifiedToggle}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <span
                    className={`flex items-center gap-2 ${
                      verified ? "text-meta-3" : ""
                    }`}
                  >
                    Verified
                    <MdVerified />
                  </span>
                </div>

                <div className="">
                  <span
                    className={`${
                      status === "pending"
                        ? " text-meta-6"
                        : status === "investigation"
                        ? " text-meta-5"
                        : status === "solved"
                        ? "text-meta-3"
                        : ""
                    }`}
                  >
                    Status:
                  </span>
                  <select
                    className="dark:border-strokedark dark:bg-boxdark"
                    value={status}
                    onChange={handleStatusChange}
                    disabled={!verified} // Disable the status select element if not verified
                  >
                    <option value="pending" className=" text-meta-6">
                      Pending
                    </option>
                    <option value="investigation" className=" text-meta-5">
                      Investigation
                    </option>
                    <option value="solved" className=" text-meta-3">
                      Solved
                    </option>
                  </select>
                </div>
                <div className="">
                  <span>Progress:</span>
                  <select
                    className="dark:border-strokedark dark:bg-boxdark"
                    disabled={!verified || status !== "investigation"} // Disable the progress select element if not verified or status is not 'investigation'
                    value={progress}
                    onChange={handleProgressChange}
                  >
                    <option
                      value="initial investigation"
                      className="text-yellow-500"
                    >
                      25% - Initial Investigation
                    </option>
                    <option
                      value="midway investigation"
                      className="text-yellow-500"
                    >
                      50% - Midway Investigation
                    </option>
                    <option
                      value="advanced investigation"
                      className="text-yellow-500"
                    >
                      75% - Advanced Investigation
                    </option>
                    <option
                      value="investigation complete"
                      className="text-yellow-500"
                    >
                      100% - Investigation Completed
                    </option>
                  </select>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseModal;
