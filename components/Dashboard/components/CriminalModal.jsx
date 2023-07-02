import React, { useState } from "react";
import { MdClose, MdPrint, MdVerified } from "react-icons/md";
import { imgURL } from "../../../utils/Service";
import UserImage from "../../../public/assets/user/user-01.png";
import Image from "next/image";

const CriminalModal = ({ criminalData, onClose, userData }) => {
  const [verified, setVerified] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleVerifiedToggle = () => {
    setVerified(!verified);
    setShowMessage(true); // Show the verification message

    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide the verification message after 3 seconds
  };

  return (
    <div className="fixed inset-0 flex items-center justify-between">
      <div className="left-64 mx-auto md:w-400">
        <div className="rounded-md border border-stroke bg-white px-10 py-6 shadow-lg dark:border-strokedark dark:bg-boxdark">
          <div className="flex items-center justify-between md:gap-10">
            <h2 className="font-bold md:text-lg">
              Crime Type: {criminalData.crime}{" "}
            </h2>
            <h2 className="uppercriminal font-bold md:text-lg">
              Crime Type: {criminalData.crime}
            </h2>
            <div className="flex items-center gap-4">
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

          <p className="mt-8 text-justify">{criminalData.description}</p>
          {criminalData.image && (
            <Image
              height={200}
              width={200}
              src={`${imgURL}${criminalData.image}`}
              alt=""
              className=" "
            />
          )}

          <div className="mt-10 rounded-lg px-4 py-2">
            <div className="">
              {criminalData.status === "arrested" && (
                <span className="text-meta-6">Arrested</span>
              )}
              {criminalData.status === "incarcacerated" && (
                <span className="text-meta-4">Incarcacerated</span>
              )}
              {criminalData.status === "released" && (
                <span className="text-meta-3">Released</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriminalModal;
