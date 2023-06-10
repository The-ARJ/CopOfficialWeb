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
} from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import styles from "../../app/sidebar.module.css";
import Link from "next/link";

function Sidebar({ state, setState, toggleContactBar }) {
  const [expand, setExpanded] = useState(0);

  function handleExpand(e) {
    const target = e.target.id;
    target == expand ? setExpanded(0) : setExpanded(target);
  }
  return (
    <div
      className={`${"fixed bottom-0 top-0 w-[300px] overflow-y-auto bg-[#2d2f5a] p-2 text-center transition-all duration-500 ease-in-out lg:left-0 lg:hidden"} ${
        styles.sidebar
      } ${state ? "left-0" : "-left-full"}`}
    >
      <div className="text-gray-100 py-4 text-xl">
        <div className="mt-1 flex items-center p-2.5">
          <h1 className=" text-2xl font-bold text-[#fff]">CopOfficial</h1>
          <span onClick={() => setState(!state)}>
            <FiMinimize className="bi bi-x ml-24 h-8 w-auto cursor-pointer text-gray lg:hidden" />
          </span>
        </div>
      </div>

      <div className="bg-zinc-700 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300">
        <BiSearch className="text-sm" />
        <input
          type="text"
          placeholder="Search"
          className="ml-4 w-full bg-transparent text-[15px] focus:outline-none"
        />
      </div>
      <Link
        href="/"
        className="hover:bg-zinc-600 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300"
      >
        <BiHomeAlt2 />
        <span className="ml-4 text-[15px] font-bold text-gray">Home</span>
      </Link>
      <Link
        href="#about"
        className="hover:bg-zinc-600 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300"
      >
        <BiBookmark />
        <span className="ml-4 text-[15px] font-bold text-gray">About</span>
      </Link>
      <Link
        href="#services"
        className="hover:bg-zinc-600 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300"
      >
        <BiCube />
        <span className="ml-4 text-[15px] font-bold text-gray">Services</span>
      </Link>
      <div
        onClick={toggleContactBar}
        className="hover:bg-zinc-600 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300"
      >
        <BiPhone />
        <span className="ml-4 text-[15px] font-bold text-gray">Contact</span>
      </div>
      <div className="bg-zinc-700 my-4 h-[1px]"></div>
      <h1 className="text-gray-400 ml-4 text-start text-lg font-bold">
        OUR SERVICES
      </h1>
      <div className="hover:bg-zinc-600 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300">
        <BiStar />
        <span className="ml-4 text-[15px] font-bold text-gray">SEO</span>
      </div>
      <div className="hover:bg-zinc-600 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300">
        <BiLike />
        <span className="ml-4 text-[15px] font-bold text-gray">SMM</span>
      </div>
      <div
        className="hover:bg-zinc-600 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300"
        onClick={handleExpand}
        id="1"
      >
        <BiPointer className="pointer-events-none" />
        <div className="pointer-events-none flex w-full items-center justify-between">
          <span className="ml-4 text-[15px] font-bold text-gray">
            Web Design
          </span>
          <span
            className={`text-sm transition duration-300 ease-in-out ${
              expand == 1 ? "rotate-0" : "rotate-90"
            }`}
            id="arrow"
          >
            <BiChevronDown className="text-lg " />
          </span>
        </div>
      </div>
      <div
        className={`mx-auto w-4/5 overflow-hidden text-left text-sm font-bold text-gray transition-all ease-in-out ${
          expand == 1
            ? "pointer-events-auto mt-2 h-fit"
            : "pointer-events-none h-0"
        }`}
      >
        <h1 className="hover:bg-zinc-600 mt-1 cursor-pointer rounded-md p-2">
          Social
        </h1>
        <h1 className="hover:bg-zinc-600 mt-1 cursor-pointer rounded-md p-2">
          Personal
        </h1>
        <h1 className="hover:bg-zinc-600 mt-1 cursor-pointer rounded-md p-2">
          Friends
        </h1>
      </div>
      <div
        className="hover:bg-zinc-600 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300"
        id="2"
        onClick={handleExpand}
      >
        <BiCaretRightSquare className="pointer-events-none" />
        <div className="pointer-events-none flex w-full items-center justify-between">
          <span className="ml-4 text-[15px] font-bold text-gray">ADs</span>
          <span
            className={`text-sm transition duration-300 ease-in-out ${
              expand == 2 ? "rotate-0" : "rotate-90"
            }`}
            id="arrow"
          >
            <BiChevronDown className="text-lg" />
          </span>
        </div>
      </div>
      <div
        className={`mx-auto w-4/5 overflow-hidden text-left text-sm font-bold text-gray transition-all ease-in-out ${
          expand == 2
            ? "pointer-events-auto mt-2 h-fit"
            : "pointer-events-none h-0"
        }`}
      >
        <h1 className="hover:bg-zinc-600 mt-1 cursor-pointer rounded-md p-2">
          Google Ad
        </h1>
        <h1 className="hover:bg-zinc-600 mt-1 cursor-pointer rounded-md p-2">
          Facebook Ad
        </h1>
      </div>
      <div
        className="hover:bg-zinc-600 mt-3 flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300"
        id="3"
        onClick={handleExpand}
      >
        <BiDockTop className="pointer-events-none" />
        <div className="pointer-events-none flex w-full items-center justify-between">
          <span className="ml-4 text-[15px] font-bold text-gray">
            Other Services
          </span>
          <span
            className={`text-sm transition duration-300 ease-in-out ${
              expand == 3 ? "rotate-0" : "rotate-90"
            }`}
            id="arrow"
          >
            <BiChevronDown className="text-lg" />
          </span>
        </div>
      </div>
      <div
        className={`mx-auto w-4/5 overflow-hidden text-left text-sm font-bold text-gray transition-all ease-in-out ${
          expand == 3
            ? "pointer-events-auto mt-2 h-fit"
            : "pointer-events-none h-0"
        }`}
      >
        <h1 className="hover:bg-zinc-600 mt-1 cursor-pointer rounded-md p-2">
          Video Content Management
        </h1>
        <h1 className="hover:bg-zinc-600 mt-1 cursor-pointer rounded-md p-2">
          Text Message Marketing
        </h1>
        <h1 className="hover:bg-zinc-600 mt-1 cursor-pointer rounded-md p-2">
          Email Campaigns Funnel
        </h1>
        <h1 className="hover:bg-zinc-600 mt-1 cursor-pointer rounded-md p-2">
          Lead Generation
        </h1>
      </div>
    </div>
  );
}

export default Sidebar;
