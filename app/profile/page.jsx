"use client";
import React, { useState, useContext } from "react";
import DefaultLayout from "../../components/Dashboard/layout/DefaultLayout";
import Breadcrumb from "../../components/Dashboard/components/Breadcrumb";
import Image from "next/image";
import Service from "../../utils/Service";
import { UserContext } from "../../utils/UserContext";
import UserImage from "../../public/assets/user/user-01.png";
import { imgURL } from "../../utils/Service";
import protectedRoute from "../../utils/protectedRoutes";

const Profile = () => {
  const { user, loading, error, dispatch } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [userImage, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  function handleImageChange(event) {
    try {
      const selectedFile = event.target.files[0];
      setPreviewImage(URL.createObjectURL(selectedFile));
      setImage(selectedFile);
    } catch (error) {
      console.error("Error while handling image change: ", error);
    }
  }

  const userToken = window.localStorage.getItem("token");

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phoneNumber);
    formData.append("profession", profession);
    if (userImage) {
      formData.append("userImage", userImage);
    }

    Service.updateUser(user._id, formData, userToken)
      .then((res) => {
        if (res.status === 200) {
          // Update the user state with the new data
          const updatedUser = {
            ...user,
            firstName,
            lastName,
            email,
            phoneNumber,
            imageURL: res.data.imageURL, // Update the user image URL
          };
          dispatch({ type: "SET_USER", payload: updatedUser });

          alert("EditProfile Update Successfully");
        } else {
          alert("err");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <DefaultLayout>
      <>
        {user ? (
          <div className="mx-auto max-w-270">
            <Breadcrumb pageName="EditProfile" />
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-5 xl:col-span-3">
                <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      Personal Information
                    </h3>
                  </div>
                  <div className="p-7">
                    <form onSubmit={handleSave}>
                      <div className=" border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="p-7">
                          <div className="mb-4 flex items-center gap-3">
                            <label
                              htmlFor="imageUpload"
                              className="h-14 w-14 rounded-full"
                            >
                              {previewImage ? (
                                <img
                                  src={previewImage}
                                  alt="User"
                                  className="h-14 w-14 rounded-full"
                                />
                              ) : (
                                <Image
                                  width={200}
                                  height={200}
                                  className="h-14 w-14 rounded-full object-cover"
                                  src={
                                    user.image
                                      ? `${imgURL}/${user.image}`
                                      : UserImage
                                  }
                                  alt="User"
                                />
                              )}
                            </label>
                            <div className="">
                              <div>
                                {user.firstName} {user.lastName}
                              </div>
                              <div className=" uppercase text-meta-3">
                                {user.role}
                              </div>
                            </div>
                          </div>
                          <div className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5">
                            <input
                              type="file"
                              id="imageUpload"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageChange}
                            />
                            <label
                              htmlFor="imageUpload"
                              className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center"
                            >
                              {previewImage ? "Change Image" : "Upload Image"}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="fullName"
                          >
                            First Name
                          </label>
                          <div className="relative">
                            <input
                              className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="text"
                              name="firstName"
                              id="firstName"
                              placeholder={user.firstName}
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="phoneNumber"
                          >
                            Last Name
                          </label>
                          <input
                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder={user.lastName}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mb-5.5">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="emailAddress"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="email"
                            name="emailAddress"
                            id="emailAddress"
                            placeholder={user.email}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mb-5.5">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                        >
                          Phone Number
                        </label>
                        <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder={user.phoneNumber}
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      <div className="mb-5.5">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="phoneNumber"
                        >
                          {user &&
                          (user.role === "police" || user.role === "admin")
                            ? "Position"
                            : "Profession"}
                        </label>
                        <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder={user.profession}
                          value={profession}
                          onChange={(e) => setProfession(e.target.value)}
                        />
                      </div>

                      <div className="flex justify-end gap-4.5">
                        <button
                          className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:shadow-1"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-span-5 xl:col-span-2"></div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    </DefaultLayout>
  );
};

export default protectedRoute(Profile);
