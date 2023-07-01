import Link from "next/link";
import React, { useState, useRef } from "react";
import { MdAddBox } from "react-icons/md";

const CreateCaseDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleOptionSelect = (option) => {
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
        className="flex cursor-pointer items-center gap-2 font-bold md:text-xl"
        onMouseEnter={handleMouseEnter}
      >
        <MdAddBox /> Add New Case
      </div>

      {showDropdown && (
        <div
          className="dropdown absolute z-10 rounded border bg-white shadow dark:bg-meta-4"
          ref={dropdownRef}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <ul className="py-2">
            <li>
              <Link
                href="/complaint"
                className="hover:bg-gray-100 cursor-pointer px-4 py-2"
                onClick={() => handleOptionSelect("Complaint")}
              >
                Complaint
              </Link>
            </li>
            <li>
              <Link
                href="/crime-report"
                className="hover:bg-gray-100 cursor-pointer px-4 py-2"
                onClick={() => handleOptionSelect("Complaint")}
              >
                Crime Report
              </Link>
            </li>
            <li>
              <Link
                href="/first-information-report"
                className="hover:bg-gray-100 cursor-pointer px-4 py-2"
                onClick={() => handleOptionSelect("Complaint")}
              >
                FIR
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateCaseDropdown;
