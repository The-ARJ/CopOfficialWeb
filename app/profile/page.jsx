"use client";
import React, { useState, useEffect, useContext } from "react";
import DefaultLayout from "../../components/Dashboard/layout/DefaultLayout";
import Breadcrumb from "../../components/Dashboard/components/Breadcrumb";
import userThree from "../../public/assets/user/user-02.png";
import Image from "next/image";
import Service from "../../utils/Service";
import { UserContext } from "../../utils/UserContext";
const Profile = () => {
  const { user, loading, error, dispatch } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userImage, setUserImage] = useState(null);

  function handleImageChange(event) {
    const selectedFile = event.target.files[0];
    setUserImage(selectedFile);
  }
  const userToken = window.localStorage.getItem("token");

  useEffect(() => {
    Service.getCurrentUser()
      .then((res) => {
        setUserDetails(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(userDetails);
  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phoneNumber);
    if (userImage) {
      formData.append("userImage", userImage);
    }
    Service.updateUser(userDetails._id, formData, userToken)
      .then((res) => {
        if (res.status === 200) {
          // Update the user state with the new data
          const updatedUser = {
            ...user,
            firstName,
            lastName,
            email,
            phoneNumber,
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
                            <div className="h-14 w-14 rounded-full">
                              <Image src={userThree} alt="User" />
                            </div>
                            <div>
                              <span className="mb-1.5 text-black dark:text-white">
                                {user.firstName}
                              </span>
                              <span className="flex gap-2.5">
                                <div className="cursor-pointer text-sm hover:text-primary">
                                  Delete
                                </div>
                                <div className="cursor-pointer text-sm hover:text-primary">
                                  Update
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
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
                            // value={lastName}
                            placeholder={user.lastName}
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
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mb-5.5">
                        <label
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                          htmlFor="Phone Number"
                        >
                          Phone Number
                        </label>
                        <input
                          className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="Phone Number"
                          id="Phone Number"
                          placeholder={user.phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-end gap-4.5">
                        <button
                          type="button"
                          className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                        >
                          Cancel
                        </button>
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

export default Profile;
