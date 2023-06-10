"use client";
import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { FaEraser } from "react-icons/fa";
import { MdCloud } from "react-icons/md";
import DefaultLayout from "@/components/Dashboard/layout/DefaultLayout";
import Breadcrumb from "@/components/Dashboard/components/Breadcrumb";
import Services from "@/components/Services";

const Complaint = () => {
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
            const response = await Services.createComplaint(formData);
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

                                {/* <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Subject
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="">Type your subject</option>
                      <option value="">USA</option>
                      <option value="">UK</option>
                      <option value="">Canada</option>
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
                </div> */}
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
                                {/* <div className="mb-6 ">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Signature
                  </label>
                  <div className="border border-form-strokedark">
                    <SignatureCanvas
                      ref={sigCanvas}
                      penColor="white"
                      canvasProps={{
                        width: 500,
                        height: 200,
                        placeholder: "Please sign here",
                        className: "sigCanvas",
                      }}
                    />
                    <FaEraser className=" text-xl " onClick={clearSignature} />
                  </div>
                </div> */}
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

export default Complaint;
