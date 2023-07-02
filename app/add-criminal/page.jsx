"use client";
import React, { useState } from "react";
import DefaultLayout from "@/components/Dashboard/layout/DefaultLayout";
import Breadcrumb from "@/components/Dashboard/components/Breadcrumb";
import { MdCloud } from "react-icons/md";
import protectedRoute from "@/utils/protectedRoutes";
import Service from "../../utils/Service";

const AddCriminal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aliases, setAliases] = useState("");
  const [description, setDescription] = useState("");
  const [crime, setCrime] = useState("");
  const [status, setStatus] = useState("");
  const [arrestDate, setArrestDate] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [criminalImage, setCriminalImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("address", address);
    formData.append("phoneNumber", phoneNumber);
    formData.append("aliases", aliases);
    formData.append("description", description);
    formData.append("crime", crime);
    formData.append("status", status);
    formData.append("arrestDate", arrestDate);
    formData.append("releaseDate", releaseDate);
    ``;
    formData.append("criminalImage", criminalImage);

    try {
      const response = await Service.createCriminal(formData);
      alert("Criminal added successfully");
      clearForm();
    } catch (err) {
      alert(err);
    }
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setGender("");
    setAge("");
    setAddress("");
    setPhoneNumber("");
    setAliases("");
    setDescription("");
    setCrime("");
    setStatus("");
    setArrestDate("");
    setReleaseDate("");
    setCriminalImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCriminalImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setCriminalImage(null);
      setPreviewImage(null);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Criminal" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Criminal
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="p-6.5">
              <div className="pb-2">Criminal Details</div>
              <div className=" flex justify-between gap-4">
                <div className="mb-4.5 w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    First Name
                  </label>
                  <input
                    value={firstName}
                    type="text"
                    required
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="Enter first name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5 w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Last Name
                  </label>
                  <input
                    value={lastName}
                    type="text"
                    required
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Enter last name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Date of Birth
                </label>
                <input
                  value={dateOfBirth}
                  type="date"
                  required
                  onChange={(event) => setDateOfBirth(event.target.value)}
                  placeholder="Select date of birth"
                  className="w-full rounded border-[1.5px]  border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className=" flex justify-between gap-4">
                <div className="mb-4.5 w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Gender
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                      onChange={(event) => setGender(event.target.value)}
                      value={gender}
                      className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
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
                <div className="mb-4.5 w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Age
                  </label>
                  <input
                    value={age}
                    type="text"
                    required
                    onChange={(event) => setAge(event.target.value)}
                    placeholder="Enter age"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Address
                </label>
                <input
                  value={address}
                  type="text"
                  required
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Enter address"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Phone Number
                </label>
                <input
                  value={phoneNumber}
                  type="text"
                  required
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  placeholder="Enter phone number"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Aliases (comma-separated)
                </label>
                <input
                  value={aliases}
                  type="text"
                  required
                  onChange={(event) => setAliases(event.target.value)}
                  placeholder="Enter aliases"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Description
                </label>
                <input
                  value={description}
                  type="text"
                  required
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Enter description"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className=" flex justify-between gap-4">
                <div className="mb-4.5 w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Crime
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                      onChange={(event) => setCrime(event.target.value)}
                      value={crime}
                      className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                      <option value="">Type of Crime</option>
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
                <div className="mb-4.5 w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Criminal Status
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                      onChange={(event) => setStatus(event.target.value)}
                      value={status}
                      className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                      <option value="">Select Status</option>
                      <option value="arrested">Arrested</option>
                      <option value="incarcerated">Incarcerated</option>
                      <option value="released">Released</option>
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
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Arrest Date
                </label>
                <input
                  value={arrestDate}
                  type="date"
                  required
                  onChange={(event) => setArrestDate(event.target.value)}
                  placeholder="Enter arrest date"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Release Date
                </label>
                <input
                  value={releaseDate}
                  type="date"
                  required
                  onChange={(event) => setReleaseDate(event.target.value)}
                  placeholder="Enter release date"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="pb-2">Upload Image</div>
              <div
                className=" h-225 md:h-420 group flex w-full cursor-pointer flex-col items-center justify-center rounded-lg  pb-2"
                style={{
                  backgroundImage: `url(${previewImage || ""})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!criminalImage ? (
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
                        name="criminalImage"
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
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              >
                Add Criminal
              </button>
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
              <h2 className="mb-4 text-2xl font-bold text-meta-6">
                Guidelines for Adding Criminal
              </h2>
              <ul className="ml-6 list-disc">
                <li className="mb-2">
                  Provide accurate information: It&apos;s crucial to provide
                  accurate and detailed information while adding a criminal
                  record. Include the first name, last name, date of birth,
                  gender, address, phone number, aliases, description, crime,
                  arrest date, release date, and an image of the criminal.
                </li>
                <li className="mb-2">
                  Collect relevant details: Gather all the necessary details
                  about the criminal, such as their personal information,
                  aliases, physical description, and past criminal activities.
                  This information will help in identifying and tracking the
                  criminal accurately.
                </li>
                <li className="mb-2">
                  Upload a clear image: Include a clear and recent image of the
                  criminal to aid in identification. Make sure the image shows
                  the face of the criminal prominently and is of high quality.
                </li>
                <li className="mb-2">
                  Provide specific crime details: Provide a detailed description
                  of the criminal&apos;s activities, including the type of crime
                  committed, the date of arrest, and the date of release. This
                  information will help law enforcement agencies and the public
                  understand the severity of the criminal&apos;s actions.
                </li>
                <li className="mb-2">
                  Respect privacy and legal regulations: Ensure that the
                  collection and sharing of criminal records comply with privacy
                  laws and legal regulations. Protect the personal information
                  of the criminal and maintain confidentiality while sharing the
                  record.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default protectedRoute(AddCriminal);
