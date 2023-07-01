"use client";
import React from "react";
import { useState, useEffect } from "react";
import { imgURL } from "../../utils/Service";
import { MdAdd, MdDelete, MdMail, MdPhone, MdWork } from "react-icons/md";
import NoUser from "../../public/assets/user/nouser.jpg";
import Service from "../../utils/Service";
import Link from "next/link";
import Image from "next/image";
import DefaultLayout from "@/components/Dashboard/layout/DefaultLayout";

const Police = () => {
  const [Police, setPolice] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("police"); // or "admin"
  const [currentPage, setCurrentPage] = useState(1);
  const [PolicePerPage] = useState(8);
  const [filteredPolice, setFilteredPolice] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRoleFilter = (event) => {
    setRoleFilter(event.target.value);
  };

  useEffect(() => {
    const newFilteredPolice = Police.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (user.role.toLowerCase() === "police" ||
          user.role.toLowerCase() === "admin")
      );
    });
    setFilteredPolice(newFilteredPolice);
    setCurrentPage(1); // Reset the current page when filters change
  }, [Police, searchTerm]);

  const indexOfLastUser = currentPage * PolicePerPage;
  const indexOfFirstUser = indexOfLastUser - PolicePerPage;
  const currentPolice = filteredPolice.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    Service.users()
      .then((res) => {
        setPolice(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to Delete this User?")) {
      const token = window.localStorage.getItem("token");
      Service.deleteUserById(id, token)
        .then((res) => {
          setPolice((prevPolice) =>
            prevPolice.filter((user) => user._id !== id)
          );
          alert("User Deleted Successfully");
        })
        .catch((err) => {
          console.log(err);
          alert("Something went Wrong");
        });
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPolice.length / PolicePerPage); i++) {
    pageNumbers.push(i);
  }

  const handleRoleChange = (userId, newRole) => {
    const token = window.localStorage.getItem("token");
    Service.updateUserRole(userId, newRole, token)
      .then((res) => {
        // Handle successful role update
        alert("Role updated successfully");
      })
      .catch((err) => {
        console.log(err);
        // Handle error
        alert("Failed to update role");
      });
  };

  return (
    <DefaultLayout>
      <div className="">
        <div className="">
          <div className="flex justify-between md:flex-row">
            <h1 className="text-gray-900 mb-4 text-2xl font-bold md:mb-0 md:text-3xl">
              Police Management
            </h1>
            <div className="flex gap-2 pb-6 font-semibold  md:flex-row md:gap-4">
              <button className="bg-teal-500 hover:bg-teal-700 rounded  px-4 py-2 text-boxdark  dark:text-white">
                <Link href="/registerAdmin" className="flex items-center">
                  <MdAdd className="mr-2" />
                  <span className="hidden md:inline-block">Add User</span>
                </Link>
              </button>
            </div>
            <div className=" right-0  md:right-10 md:top-20">
              <div className="relative flex items-end justify-end">
                <input
                  type="text"
                  placeholder="Search..."
                  className="focus:ring-teal-500 w-72 rounded-md border bg-white px-3  py-2 text-center text-boxdark shadow-md focus:border-transparent focus:outline-none focus:ring-2 dark:border-meta-4 dark:bg-boxdark dark:text-white md:text-start"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <select
                  name="role"
                  id="role"
                  onChange={handleRoleFilter}
                  className="absolute bottom-0 right-0 top-0 my-auto h-10 rounded-full bg-white text-sm text-boxdark focus:outline-none dark:bg-boxdark dark:text-white md:px-5 md:pr-10"
                >
                  <option value="">All</option>
                  <option value="police">Police</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 items-center justify-center gap-2  md:grid-cols-2    lg:grid-cols-3 xl:grid-cols-4">
          {currentPolice.length ? (
            currentPolice.map((user) => (
              <div
                className="mx-2 max-w-xs overflow-hidden rounded shadow-lg   md:my-2"
                key={user._id}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={
                      user
                        ? user.image
                          ? `${imgURL}${user.image}`
                          : NoUser
                        : NoUser
                    }
                    layout="fill"
                    objectFit="cover"
                    alt="User"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="mb-2 flex text-base font-bold md:text-xl">
                    <p className="mr-2  ">
                      {user.firstName} {user.lastName}
                    </p>
                  </div>

                  <div className=" flex flex-col gap-2 ">
                    <p className="text-gray-700 flex items-center gap-2 text-base">
                      <MdMail />
                      {user.email}
                    </p>
                    {user.phoneNumber && (
                      <p className="text-gray-700 flex items-center gap-2 text-base">
                        <MdPhone />
                        {user.phoneNumber}
                      </p>
                    )}
                    {user.profession && (
                      <p className="text-gray-700 flex items-center gap-2 text-base lowercase">
                        <MdWork />
                        {user.profession}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <select
                      className=" mb-2 mr-2 inline-block  rounded-full bg-white px-3 py-1 text-sm font-semibold text-boxdark dark:bg-boxdark dark:text-white"
                      value={user.role}
                      onChange={(event) =>
                        handleRoleChange(user._id, event.target.value)
                      }
                    >
                      <option value="user">User</option>
                      <option value="police">Police</option>
                      <option value="admin">Admin</option>
                    </select>
                    <button className="rounded px-4 py-2 font-bold text-boxdark   hover:bg-meta-3 dark:text-white">
                      <MdPhone />
                    </button>
                    <button className="rounded px-4 py-2 font-bold text-boxdark   hover:bg-meta-5  dark:text-white">
                      <MdMail />
                    </button>
                    <button
                      className="rounded px-4 py-2 font-bold text-boxdark   hover:bg-meta-1  dark:text-white"
                      onClick={() => handleDelete(user._id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No User found.</p>
          )}
        </div>
        <div className="m-20 flex items-center justify-center">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`${
                currentPage === number
                  ? " bg-bodydark2 text-white"
                  : "  bg-body text-white"
              } hover:bg-teal-600 mx-1 rounded-md px-8 py-2`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Police;
