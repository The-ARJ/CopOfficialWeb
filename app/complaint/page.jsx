"use client";
import React, { useState, useRef } from "react";
import { MdCloud } from "react-icons/md";
import DefaultLayout from "@/components/Dashboard/layout/DefaultLayout";
import Breadcrumb from "@/components/Dashboard/components/Breadcrumb";
import protectedRoute from "@/utils/protectedRoutes";
import Service from "../../utils/Service";

const Complaint = () => {
  const [complaintImage, setComplaintImage] = useState(null);
  const [dat, setDAT] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [offendername, setOffenderName] = useState("");
  const [offenderdet, setOffenderDet] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const submitForm = async () => {
    const formData = new FormData();
    formData.append("complaintImage", complaintImage);
    formData.append("dat", dat);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("offendername", offendername);
    formData.append("offenderdet", offenderdet);

    try {
      const response = await Service.createComplaint(formData);
      alert("Complaint Sent Successfully");
      // Optionally, you can handle the response data here
      clearForm();
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setComplaintImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setComplaintImage(null);
      setPreviewImage(null);
    }
  };

  const clearForm = () => {
    setComplaintImage(null);
    setDAT("");
    setDescription("");
    setLocation("");
    setOffenderName("");
    setOffenderDet("");
    setPreviewImage(null);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Complaint" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Complaint Form
              </h3>
            </div>
            <form onSubmit={handleSubmit} action="#">
              <div className="p-6.5">
                <div className=" pb-2">Incident Details</div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Date and Time
                  </label>
                  <input
                    type="text"
                    name="dat"
                    value={dat}
                    required
                    onChange={(event) => setDAT(event.target.value)}
                    placeholder="Date and DAT - if known"
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
                    name="location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="location where incident happened"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Description <span className="text-meta-1">*</span>
                  </label>
                  <textarea
                    rows="6"
                    required
                    placeholder="Describe the incident"
                    type="text"
                    name="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>
                <div className=" pb-2">Offender Information - if Known</div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Offender Name
                  </label>
                  <input
                    type="text"
                    placeholder="eg; Ram"
                    name="offendername"
                    value={offendername}
                    onChange={(event) => setOffenderName(event.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Offender Contact Information
                  </label>
                  <input
                    type="text"
                    name="offenderdetail"
                    value={offenderdet}
                    onChange={(event) => setOffenderDet(event.target.value)}
                    placeholder="phone, email, or any details"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className=" pb-2">Supporting Documents - if have</div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Any relevant documents, photos, or videos that support the
                    complaint.
                  </label>
                  <div
                    className="border-gray-300 h-225 md:h-420 group flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 "
                    style={{
                      backgroundImage: `url(${previewImage || ""})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {!complaintImage ? (
                      <div className="border-gray-300 h-225 md:h-420 group flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 ">
                        <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                            <MdCloud className="text-gray-500 hover:text-gray-700 text-3xl" />
                            <p className="text-gray-500 hover:text-gray-700">
                              Click Here to Upload
                            </p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            name="complaintImage"
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
                              Click Here to Upload
                            </p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            name="foodImage"
                            id="image"
                            onChange={handleImageChange}
                            className="h-0 w-0"
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" pb-4 text-center uppercase ">
                  your complaint will remain safe with us
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                >
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
                Guidelines for Filing a Complaint
              </h2>
              <ul className="ml-6 list-disc">
                <li className="mb-2">
                  Provide accurate information: When filing a complaint,
                  it&apos;s important to provide accurate information about the
                  incident, including the date, dat, location, and description
                  of what happened. This will help us investigate and resolve
                  the complaint more effectively.
                </li>
                <li className="mb-2">
                  Be concise: While it&apos;s important to provide detailed
                  information, it&apos;s also important to be concise and avoid
                  unnecessary details. Stick to the facts and provide only the
                  information that is relevant to the complaint.
                </li>
                <li className="mb-2">
                  Avoid using offensive language: When filing a complaint,
                  it&apos;s important to maintain a professional and respectful
                  tone. Avoid using offensive language or making personal
                  attacks, as this can undermine the credibility of the
                  complaint.
                </li>

                <li className="mb-2">
                  Provide supporting evidence: If possible, provide supporting
                  evidence such as photos, videos, or witness statements that
                  can help to corroborate your complaint. This can help law
                  enforcement agencies to investigate and resolve the complaint
                  more effectively.
                </li>
                <li className="mb-2">
                  Use the appropriate service: Make sure to use the appropriate
                  service when filing a complaint. If the complaint is related
                  to a crime, use the &quot;Crime Reporting&quot; service. If
                  the complaint is related to public safety or law enforcement,
                  use the &quot;Complaint&quot; service.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default protectedRoute(Complaint);
