import React, { useState, useEffect } from "react";
import Service from "../../../utils/Service";
const DataStats = () => {
  const [cases, setCases] = useState([]);
  useEffect(() => {
    getAllCases();
  }, []);

  const getAllCases = async () => {
    try {
      const token = window.localStorage.getItem("token");

      const complaintResponse = await Service.getAllComplaints(token);
      const complaintCases = complaintResponse.data.data.map((complaint) => ({
        ...complaint,
        caseType: "complaint",
      }));

      const crimeReportResponse = await Service.getAllCrimeReports(token);
      const crimeReportCases = crimeReportResponse.data.data.map(
        (crimeReport) => ({
          ...crimeReport,
          caseType: "crimeReport",
        })
      );

      const firResponse = await Service.getAllFIRs(token);
      const firCases = firResponse.data.data.map((fir) => ({
        ...fir,
        caseType: "fir",
      }));

      const allCases = [...complaintCases, ...crimeReportCases, ...firCases];
      setCases(allCases);
    } catch (error) {
      console.error(error);
    }
  };

  const [Police, setPolice] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPolice, setFilteredPolice] = useState([]);

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
  }, [Police, searchTerm]);

  useEffect(() => {
    Service.users()
      .then((res) => {
        setPolice(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
        user.role.toLowerCase() === "user"
      );
    });
    setFilteredUsers(newFilteredUsers);
  }, [users, searchTerm]);

  useEffect(() => {
    Service.users()
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="col-span-12 rounded-3xl border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
        <div className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark xl:border-b-0 xl:border-r xl:pb-0">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">
              {cases.length}
            </h4>
            <p className="text-sm font-medium">Total Cases</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25259 5.87281L4.22834 9.89706L3.16751 8.83623L9.00282 3.00092L14.8381 8.83623L13.7773 9.89705L9.75306 5.87281L9.75306 15.0046L8.25259 15.0046L8.25259 5.87281Z"
                fill="#10B981"
              />
            </svg>
            <span className="text-meta-3">18%</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark xl:border-b-0 xl:border-r xl:pb-0">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">
              {filteredPolice.length}
            </h4>
            <p className="text-sm font-medium">Total Policeman</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25259 5.87281L4.22834 9.89706L3.16751 8.83623L9.00282 3.00092L14.8381 8.83623L13.7773 9.89705L9.75306 5.87281L9.75306 15.0046L8.25259 15.0046L8.25259 5.87281Z"
                fill="#10B981"
              />
            </svg>
            <span className="text-meta-3">25%</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-b border-stroke pb-5 dark:border-strokedark sm:border-b-0 sm:pb-0 xl:border-r">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">
              {filteredUsers.length}
            </h4>
            <p className="text-sm font-medium">Total Users</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75302 12.1328L13.7773 8.10856L14.8381 9.16939L9.00279 15.0047L3.16748 9.16939L4.22831 8.10856L8.25256 12.1328V3.00098H9.75302V12.1328Z"
                fill="#F0950C"
              />
            </svg>
            <span className="text-meta-8">7%</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div>
            <h4 className="mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg">
              2m 56s
            </h4>
            <p className="text-sm font-medium">Total Criminals</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25259 5.87281L4.22834 9.89706L3.16751 8.83623L9.00282 3.00092L14.8381 8.83623L13.7773 9.89705L9.75306 5.87281L9.75306 15.0046L8.25259 15.0046L8.25259 5.87281Z"
                fill="#10B981"
              />
            </svg>
            <span className="text-meta-3">12%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStats;
