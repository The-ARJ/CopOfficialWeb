"use client";
import React, { useState, useRef } from "react";
import DefaultLayout from "@/components/Dashboard/layout/DefaultLayout";
import Breadcrumb from "@/components/Dashboard/components/Breadcrumb";
import protectedRoute from "@/utils/protectedRoutes";
import Service from "../../utils/Service";
import { MdCloud } from "react-icons/md";

const FIR = () => {
  const [firImage, setFIRImage] = useState(null);
  const [firVideo, setFIRVideo] = useState(null);
  const [dat, setDAT] = useState("");
  const [crimetype, setFIR] = useState("");
  const [location, setLocation] = useState("");
  const [addnote, setAdditionalNotes] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const submitForm = async () => {
    const formData = new FormData();
    formData.append("firImage", firImage);
    formData.append("firVideo", firVideo);
    formData.append("dat", dat);
    formData.append("crimetype", crimetype);
    formData.append("location", location);
    formData.append("addnote", addnote);

    try {
      const response = await Service.createFIR(formData);
      alert("FIR Sent Successfully");
      clearForm();
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };
  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFIRVideo(file);
    } else {
      setFIRVideo(null);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFIRImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFIRImage(null);
      setPreviewImage(null);
    }
  };

  const clearForm = () => {
    setFIRImage(null);
    setDAT("");
    setFIRVideo(null);
    setLocation("");
    setFIR("");
    setAdditionalNotes("");
    setPreviewImage(null);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="First Information Report" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- FIR Form --> */}
          <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                FIR Form
              </h3>
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className=" pb-2">Incident Details</div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Date and Time
                  </label>
                  <input
                    value={dat}
                    onChange={(event) => setDAT(event.target.value)}
                    placeholder="Date and Time - if known"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Location <span className="text-meta-1">*</span>
                  </label>
                  <input
                    value={location}
                    type="text"
                    required
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="Location where the crime occurred"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Crime Type
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                      onChange={(event) => setFIR(event.target.value)}
                      value={crimetype}
                      className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                      <option value="">Select Type of Crime</option>
                      <option value="assault">Assault</option>
                      <option value="cybercrime">Cybercrime</option>
                      <option value="domestic-violence">
                        Domestic Violence
                      </option>
                      <option value="drug-offenses">Drug Offenses</option>
                      <option value="fraud">Fraud</option>
                      <option value="hate-crimes">Hate Crimes</option>
                      <option value="homicide">Homicide</option>
                      <option value="larceny-theft">Larceny/Theft</option>
                      <option value="robbery">Robbery</option>
                      <option value="sexual-assault-rape">
                        Sexual Assault/Rape
                      </option>
                      <option value="stalking">Stalking</option>
                      <option value="vandalism">Vandalism</option>
                      <option value="white-collar-crime">
                        White Collar Crime
                      </option>
                      <option value="character-assassination">
                        Character Assassination
                      </option>
                      <option value="other">Other</option>
                    </select>

                    <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className=" pb-2">Supporting Documents </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Any relevant documents, photos, that support the complaint.
                    (if available)
                  </label>
                  <div
                    className="border-gray-300 h-225 md:h-420 group flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 "
                    style={{
                      backgroundImage: `url(${previewImage || ""})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {!firImage ? (
                      <div className="border-gray-300 h-225 md:h-420 group flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 ">
                        <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                            <MdCloud className="text-gray-500 hover:text-gray-700 text-3xl" />
                            <p className="text-gray-500 hover:text-gray-700">
                              Click Here to Upload Image File
                            </p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            name="firImage"
                            id="image"
                            onChange={handleImageChange}
                            className="h-0 w-0"
                          />
                        </label>
                      </div>
                    ) : (
                      <div
                        className="border-gray-300 h-225 md:h-420 group flex w-full cursor-pointer flex-col items-center justify-center rounded-lg "
                        style={{
                          backgroundImage: `url(${previewImage || ""})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                            <MdCloud className="text-gray-500 hover:text-gray-700 text-3xl" />
                            <p className="text-gray-500 hover:text-gray-700">
                              Click Here to Upload Image File
                            </p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            name="firImage"
                            id="image"
                            onChange={handleImageChange}
                            className="h-0 w-0"
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Detailed Description of Incident Explained by a Victim,
                    Witness or Other, with Person&apos;s Face
                  </label>
                  <div className="border-gray-300 h-225 md:h-420 group flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2">
                    <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                        <MdCloud className="text-gray-500 hover:text-gray-700 text-3xl" />
                        {firVideo ? (
                          <p className="text-gray-500 hover:text-gray-700">
                            File selected
                          </p>
                        ) : (
                          <p className="text-gray-500 hover:text-gray-700">
                            Click Here to Upload Video File
                          </p>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="video/*"
                        name="firVideo"
                        id="video"
                        required
                        onChange={handleVideoChange}
                        className="h-0 w-0"
                      />
                    </label>
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Additional notes
                  </label>
                  <input
                    value={addnote}
                    type="text"
                    onChange={(event) => setAdditionalNotes(event.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className=" pb-4 text-center uppercase text-meta-6 ">
                  Your report will remain safe with us.
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                >
                  Send Report
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white ">
                Guidelines
              </h3>
            </div>
            <div className="container mx-auto px-4 py-10">
              <h2 className="mb-4 text-2xl font-bold text-meta-6">
                Guidelines for Filing FIR
              </h2>
              <ul className="ml-6 list-disc">
                <li className="mb-2">
                  Provide accurate information: It&apos;s crucial to provide
                  accurate and detailed information while filing an FIR. Include
                  the date, time, location, and a clear description of the
                  incident. This will aid law enforcement in conducting a
                  thorough investigation.
                </li>
                <li className="mb-2">
                  Identify the relevant crime category: Select the appropriate
                  crime category that aligns with the nature of the offense.
                  This will assist law enforcement in determining the
                  appropriate actions to be taken.
                </li>
                <li className="mb-2">
                  Gather supporting evidence: If you possess any supporting
                  evidence such as photographs, videos, or documents related to
                  the incident, ensure to provide them along with the FIR. These
                  pieces of evidence can significantly contribute to the
                  investigation process.
                </li>
                <li className="mb-2">
                  Avoid making false statements: It is imperative to refrain
                  from providing false or misleading information in the FIR.
                  False statements can have serious legal consequences and
                  hinder the progress of the investigation. Only provide
                  information that is truthful and accurate.
                </li>
                <li className="mb-2">
                  Maintain a professional and respectful tone: When filling out
                  the FIR, maintain a professional and respectful tone. Refrain
                  from using offensive language, making personal attacks, or
                  including irrelevant details. This will help ensure the
                  credibility and seriousness of the report.
                </li>
                <li className="mb-2">
                  File the FIR promptly: It is essential to file the FIR as soon
                  as possible after the occurrence of the incident. Prompt
                  filing helps law enforcement agencies take immediate action
                  and increases the chances of obtaining relevant evidence and
                  witnesses.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default protectedRoute(FIR);
