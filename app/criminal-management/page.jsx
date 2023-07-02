"use client";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { imgURL } from "../../utils/Service";
import { MdAdd, MdDelete, MdMail, MdPhone, MdWork } from "react-icons/md";
import NoUser from "../../public/assets/user/nouser.jpg";
import Service from "../../utils/Service";
import Link from "next/link";
import Image from "next/image";
import DefaultLayout from "@/components/Dashboard/layout/DefaultLayout";
import CriminalModal from "@/components/Dashboard/components/CriminalModal";
import { UserContext } from "../../utils/UserContext";

const Criminal = () => {
  const [Criminals, setCriminals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState(""); // or "incarcerated"
  const [currentPage, setCurrentPage] = useState(1);
  const [CriminalsPerPage] = useState(8);
  const [filteredCriminals, setFilteredCriminals] = useState([]);
  const { user, loading, error, dispatch } = useContext(UserContext);
  const [selectedCriminal, setSelectedCriminal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };

  useEffect(() => {
    const newFilteredCriminals = Criminals.filter((criminal) => {
      return (
        criminal.firstName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        criminal.status.toLowerCase().includes(statusFilter.toLowerCase())
      );
    });
    setFilteredCriminals(newFilteredCriminals);
    setCurrentPage(1); // Reset the current page when filters change
  }, [Criminals, searchTerm, statusFilter]);

  const indexOfLastCriminal = currentPage * CriminalsPerPage;
  const indexOfFirstCriminal = indexOfLastCriminal - CriminalsPerPage;
  const currentCriminals = filteredCriminals.slice(
    indexOfFirstCriminal,
    indexOfLastCriminal
  );

  useEffect(() => {
    fetchAllCriminals();
  }, []);
  const fetchAllCriminals = () => {
    Service.getAllCriminals()
      .then((res) => {
        setCriminals(res.data.data);
        setFilteredCriminals(res.data.data); // Set initial filtered criminals to all criminals
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete this criminal?")) {
      const token = window.localStorage.getItem("token");
      Service.deleteCriminalById(id, token)
        .then((res) => {
          setCriminals((prevCriminals) =>
            prevCriminals.filter((criminal) => criminal.id !== id)
          );
          alert("Criminal deleted successfully");
          fetchAllCriminals(); // Fetch all criminals after successful deletion
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    }
  };

  // Update status function
  const handleStatusChange = (criminalId, newStatus) => {
    const token = window.localStorage.getItem("token");
    const updatedCriminalDetails = { status: newStatus };
    Service.updateCriminal(criminalId, updatedCriminalDetails, token)
      .then((res) => {
        alert("Status updated successfully");
        fetchAllCriminals(); // Fetch all criminals after successful status update
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update status");
      });
  };

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredCriminals.length / CriminalsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  const togglemodal = (rowIndex, criminal) => {
    setSelectedCriminal(criminal);
    setShowModal(true);
  };
  return (
    <DefaultLayout>
      <div className="">
        <div className="">
          <div className="flex justify-between md:flex-row">
            <h1 className="text-gray-900 mb-4 text-2xl font-bold md:mb-0 md:text-3xl">
              Criminal Management
            </h1>
            <div className="flex gap-2 pb-6 font-semibold  md:flex-row md:gap-4">
              <button className="bg-teal-500 hover:bg-teal-700 rounded  px-4 py-2 text-boxdark  dark:text-white">
                <Link href="/add-criminal" className="flex items-center">
                  <MdAdd className="mr-2" />
                  <span className="hidden md:inline-block">Add Criminal</span>
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
                  name="status"
                  id="status"
                  onChange={handleStatusFilter}
                  className="absolute bottom-0 right-0 top-0 my-auto h-10 rounded-full bg-white text-sm text-boxdark focus:outline-none dark:bg-boxdark dark:text-white md:px-5 md:pr-10"
                >
                  <option value="">All</option>
                  <option value="arrested">Arrested</option>
                  <option value="released">Released</option>
                  <option value="incarcerated">Incarcerated</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 items-center justify-center gap-2  md:grid-cols-2    lg:grid-cols-3 xl:grid-cols-4">
          {currentCriminals.length ? (
            currentCriminals.map((criminal, index) => (
              <div
                className="mx-2 max-w-xs overflow-hidden rounded shadow-lg   md:my-2"
                key={criminal._id}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={criminal.image ? `${imgURL}${criminal.image}` : NoUser}
                    layout="fill"
                    objectFit="cover"
                    alt="Criminal"
                    onClick={() => togglemodal(index, criminal)}
                  />
                </div>
                <div className="px-4 py-4">
                  <div className="mb-2 flex text-base font-semibold md:text-lg">
                    <p className="mr-2">{criminal.firstName}</p>
                    <p className="mr-2">{criminal.lastName}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    {criminal.age && (
                      <p className="flex items-center gap-2 text-base">
                        <span className="font-semibold">Age:</span>{" "}
                        {criminal.age}
                      </p>
                    )}
                    {criminal.crime && (
                      <p className="flex items-center gap-2 text-base">
                        <span className="font-semibold">Crime:</span>{" "}
                        {criminal.crime}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between px-2 py-4">
                  <select
                    className={`mb-2 mr-2 inline-block rounded-full px-3 py-1 text-sm font-semibold text-boxdark dark:text-white ${
                      criminal.status === "released"
                        ? " bg-meta-3"
                        : criminal.status === "arrested"
                        ? " bg-meta-6"
                        : criminal.status === "incarcerated"
                        ? " bg-meta-1"
                        : "dark:bg-boxdark"
                    }`}
                    value={criminal.status}
                    onChange={(event) =>
                      handleStatusChange(criminal._id, event.target.value)
                    }
                  >
                    <option value="released">Released</option>
                    <option value="arrested">Arrested</option>
                    <option value="incarcerated">Incarcerated</option>
                  </select>

                  <button className="rounded px-2 py-2  font-bold text-boxdark   hover:bg-meta-3 dark:text-white">
                    <MdPhone />
                  </button>
                  <button className="rounded px-2 py-2  font-bold text-boxdark   hover:bg-meta-5  dark:text-white">
                    <MdMail />
                  </button>
                  <button
                    className="rounded px-2 py-2  font-bold text-boxdark   hover:bg-meta-1  dark:text-white"
                    onClick={() => handleDelete(criminal._id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No criminal found.</p>
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
      {showModal && (
        <CriminalModal
          criminalData={selectedCriminal}
          userData={user}
          onClose={() => setShowModal(false)}
        />
      )}
    </DefaultLayout>
  );
};

export default Criminal;
