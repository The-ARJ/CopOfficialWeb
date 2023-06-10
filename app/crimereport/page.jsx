"use client";
import React, { useState, useRef } from "react";
import DefaultLayout from "@/components/Dashboard/layout/DefaultLayout";
import Breadcrumb from "@/components/Dashboard/components/Breadcrumb";
import protectedRoute from "@/utils/protectedRoutes";

const CrimeReport = () => {
  const [signature, setSignature] = useState(null);
  const sigCanvas = useRef(null);

  const clearSignature = () => {
    event.preventDefault();
    sigCanvas.current.clear();
    setSignature(null);
  };

  const saveSignature = () => {
    setSignature(sigCanvas.current.toDataURL());
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Crime Report" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Crime Report Form --> */}
          <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Crime Report Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className=" pb-2">Crime Details</div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Date and Time
                  </label>
                  <input
                    placeholder="Date and Time - if known"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Location <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="location where crime happened"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Crime Type
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="">Type of Crime</option>
                      <option value="">Assault</option>
                      <option value="">Cybercrime</option>
                      <option value="">Domestic Violence</option>
                      <option value="">Drug Offenses</option>
                      <option value="">Fraud</option>
                      <option value="">Hate Crimes</option>
                      <option value="">Homicide</option>
                      <option value="">Larceny/Theft</option>
                      <option value="">Robbery</option>
                      <option value="">Sexual Assault/Rape</option>
                      <option value="">Stalking</option>
                      <option value="">Vandalism</option>
                      <option value="">White Collar Crime</option>
                      <option value="">Character Assasination</option>
                      <option value="">Other</option>
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
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Detailed Description <span className="text-meta-1">*</span>
                  </label>
                  <textarea
                    rows="6"
                    required
                    placeholder="Describe the incident"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>
                <div className=" pb-2">Supporting Documents - if have</div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Any relevant documents, photos, or videos that support the
                    crime.
                  </label>
                  <input
                    placeholder="eg; Ram"
                    type="file"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Additional notes
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className=" pb-4 text-center uppercase ">
                  your report will remain safe with us
                </div>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Guidelines
              </h3>
            </div>
            <div className="container mx-auto px-4 py-10">
              <h2 className="mb-4 text-2xl font-bold">
                Guidelines for Crime Report
              </h2>
              <ul className="ml-6 list-disc">
                <li className="mb-2">
                  Provide accurate information: It&apos;s important to provide
                  accurate information about the crime, including the date,
                  time, location, and description of what happened. This will
                  help law enforcement agencies investigate and resolve the
                  crime more effectively.
                </li>
                <li className="mb-2">
                  Choose the appropriate crime category: Select the category of
                  the crime that best matches the type of crime that occurred.
                  This will help law enforcement agencies to respond and take
                  appropriate actions.
                </li>
                <li className="mb-2">
                  Upload supporting evidence: If you have any supporting
                  evidence, such as photos or videos, upload them to the form to
                  help law enforcement agencies in their investigation.
                </li>
                <li className="mb-2">
                  Avoid making false statements: Making false statements on the
                  crime report form can have serious legal consequences. Ensure
                  that all the information you provide is true and accurate.
                </li>
                <li className="mb-2">
                  Use a professional and respectful tone: When filling out the
                  crime report form, use a professional and respectful tone.
                  Avoid using offensive language or making personal attacks, as
                  this can undermine the credibility of the report.{" "}
                </li>
                <li className="mb-2">
                  Submit the form promptly: Submit the form as soon as possible
                  after the crime occurs to ensure that law enforcement agencies
                  can take appropriate actions in a timely manner.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default protectedRoute(CrimeReport);
