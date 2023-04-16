import { useState } from "react";
import {
  BiBookmark,
  BiCaretRightSquare,
  BiChevronDown,
  BiCube,
  BiDockTop,
  BiHomeAlt2,
  BiLike,
  BiPhone,
  BiPointer,
  BiSearch,
  BiStar,
  BiX,
} from "react-icons/bi";
import styles from "../app/sidebar.module.css";

function Sidebar({ state, setState }) {
  const [expand, setExpanded] = useState(0);

  function handleExpand(e) {
    const target = e.target.id;
    target == expand ? setExpanded(0) : setExpanded(target);
  }
  return (
    <div
      className={`${"fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] lg:hidden overflow-y-auto text-center bg-[#334155] transition-all ease-in-out duration-500"} ${
        styles.sidebar
      } ${state ? "left-0" : "-left-full"}`}
    >
      <div className="text-gray-100 text-xl py-4">
        <div className="p-2.5 mt-1 flex items-center">
          <h1 className=" text-[#fff] text-2xl font-bold">CopOfficial</h1>
          <span onClick={() => setState(!state)}>
            <BiX className="bi bi-x cursor-pointer ml-24 lg:hidden w-auto h-8" />
          </span>
        </div>
      </div>

      <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-zinc-700 text-white">
        <BiSearch className="text-sm" />
        <input
          type="text"
          placeholder="Search"
          className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-zinc-600 text-white">
        <BiHomeAlt2 />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-zinc-600 text-white">
        <BiBookmark />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">About</span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-zinc-600 text-white">
        <BiCube />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Services
        </span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-zinc-600 text-white">
        <BiPhone />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Contact
        </span>
      </div>
      <div className="my-4 bg-zinc-700 h-[1px]"></div>
      <h1 className="text-lg ml-4 text-gray-400 font-bold text-start">
        OUR SERVICES
      </h1>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-zinc-600 text-white">
        <BiStar />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">SEO</span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-zinc-600 text-white">
        <BiLike />
        <span className="text-[15px] ml-4 text-gray-200 font-bold">SMM</span>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-zinc-600 text-white"
        onClick={handleExpand}
        id="1"
      >
        <BiPointer className="pointer-events-none" />
        <div className="flex justify-between w-full items-center pointer-events-none">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Web Design
          </span>
          <span
            className={`text-sm transition ease-in-out duration-300 ${
              expand == 1 ? "rotate-0" : "rotate-90"
            }`}
            id="arrow"
          >
            <BiChevronDown className="text-lg " />
          </span>
        </div>
      </div>
      <div
        className={`text-left text-sm w-4/5 text-gray-200 font-bold mx-auto transition-all ease-in-out overflow-hidden ${
          expand == 1
            ? "h-fit pointer-events-auto mt-2"
            : "h-0 pointer-events-none"
        }`}
      >
        <h1 className="cursor-pointer p-2 hover:bg-zinc-600 rounded-md mt-1">
          Social
        </h1>
        <h1 className="cursor-pointer p-2 hover:bg-zinc-600 rounded-md mt-1">
          Personal
        </h1>
        <h1 className="cursor-pointer p-2 hover:bg-zinc-600 rounded-md mt-1">
          Friends
        </h1>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-zinc-600 text-white"
        id="2"
        onClick={handleExpand}
      >
        <BiCaretRightSquare className="pointer-events-none" />
        <div className="flex justify-between w-full items-center pointer-events-none">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">ADs</span>
          <span
            className={`text-sm transition ease-in-out duration-300 ${
              expand == 2 ? "rotate-0" : "rotate-90"
            }`}
            id="arrow"
          >
            <BiChevronDown className="text-lg" />
          </span>
        </div>
      </div>
      <div
        className={`text-left text-sm w-4/5 text-gray-200 font-bold mx-auto transition-all ease-in-out overflow-hidden ${
          expand == 2
            ? "h-fit pointer-events-auto mt-2"
            : "h-0 pointer-events-none"
        }`}
      >
        <h1 className="cursor-pointer p-2 hover:bg-zinc-600 rounded-md mt-1">
          Google Ad
        </h1>
        <h1 className="cursor-pointer p-2 hover:bg-zinc-600 rounded-md mt-1">
          Facebook Ad
        </h1>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-zinc-600 text-white"
        id="3"
        onClick={handleExpand}
      >
        <BiDockTop className="pointer-events-none" />
        <div className="flex justify-between w-full items-center pointer-events-none">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Other Services
          </span>
          <span
            className={`text-sm transition ease-in-out duration-300 ${
              expand == 3 ? "rotate-0" : "rotate-90"
            }`}
            id="arrow"
          >
            <BiChevronDown className="text-lg" />
          </span>
        </div>
      </div>
      <div
        className={`text-left text-sm w-4/5 text-gray-200 font-bold mx-auto transition-all ease-in-out overflow-hidden ${
          expand == 3
            ? "h-fit pointer-events-auto mt-2"
            : "h-0 pointer-events-none"
        }`}
      >
        <h1 className="cursor-pointer p-2 hover:bg-zinc-600 rounded-md mt-1">
          Video Content Management
        </h1>
        <h1 className="cursor-pointer p-2 hover:bg-zinc-600 rounded-md mt-1">
          Text Message Marketing
        </h1>
        <h1 className="cursor-pointer p-2 hover:bg-zinc-600 rounded-md mt-1">
          Email Campaigns Funnel
        </h1>
        <h1 className="cursor-pointer p-2 hover:bg-zinc-600 rounded-md mt-1">
          Lead Generation
        </h1>
      </div>
    </div>
  );
}

export default Sidebar;
