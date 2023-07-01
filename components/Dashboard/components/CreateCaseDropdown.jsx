import Link from "next/link";
import React, { useState, useRef } from "react";
import { MdAddBox } from "react-icons/md";

const CreateCaseDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleOptionSelect = (option) => {
    // Handle the selected option here
    console.log(`Selected option: ${option}`);
  };

  const handleDropdownMouseLeave = (event) => {
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setShowDropdown(false);
    }
  };

  return (
    <div className="relative">
      <div
        className="flex cursor-pointer items-center gap-2 md:text-xl font-bold"
        onMouseEnter={handleMouseEnter}
      >
        <div>{/* Add any additional elements here */}</div>
        <MdAddBox /> Add New Case
      </div>

      {showDropdown && (
        <div
          className="dropdown absolute z-10 rounded border bg-white shadow dark:bg-meta-4"
          ref={dropdownRef}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <ul className="py-2">
            <Link href='/complaint'
              className="hover:bg-gray-100 cursor-pointer px-4 py-2"
              onClick={() => handleOptionSelect("Complaint")}
            >
              Complaint
            </Link>
            <li
              className="hover:bg-gray-100 cursor-pointer px-4 py-2"
              onClick={() => handleOptionSelect("Crime Report")}
            >
              Crime Report
            </li>
            <li
              className="hover:bg-gray-100 cursor-pointer px-4 py-2"
              onClick={() => handleOptionSelect("FIR")}
            >
              FIR
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateCaseDropdown;
