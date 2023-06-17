"use client";
import DefaultLayout from "@/components/Dashboard/layout/DefaultLayout";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEye, AiOutlineDownload } from "react-icons/ai";
import Service from "../../utils/Service";

const Cases = () => {
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    getAllComplaints();
  }, []);

  const getAllComplaints = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const response = await Service.getAllComplaints(token);
      setComplaints(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComplaint = async (id) => {
    try {
      const token = window.localStorage.getItem("token");
      await Service.deleteComplaintbyId(id, token);
      getAllComplaints(); // Refresh the complaint list after deletion
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  Case
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Issued Date
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Status
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint._id}>
                  <td className="px-4 py-5 pl-9 xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {complaint.description}
                    </h5>
                    {/* <p className="text-sm">{complaint.type}</p> */}
                  </td>
                  <td className="px-4 py-5">
                    <p className="text-black dark:text-white">
                      {new Date(complaint.createdAt).toLocaleString()}
                    </p>
                  </td>
                  <td className="px-4 py-5">
                    <p className="inline-flex rounded-full bg-warning bg-opacity-10 px-3 py-1 text-sm font-medium text-warning">
                      {complaint.progress[0]?.status}
                    </p>
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
                        <AiFillEye />
                      </button>
                      <button
                        className="hover:text-primary"
                        onClick={() => deleteComplaint(complaint._id)}
                      >
                        <AiFillDelete />
                      </button>
                      <button className="hover:text-primary">
                        <AiOutlineDownload />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cases;
