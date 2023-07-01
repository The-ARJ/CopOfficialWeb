import React from "react";

import DropdownNotification from "./DropdownNotification";
import DropdownMessage from "./DropdownMessage";
import DropdownUser from "./DropdownUser";
import DarkModeSwitcher from "./DarkModeSwitcher";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { GiHealingShield } from "react-icons/gi";
import { MdMenu } from "react-icons/md";

const Header = (props) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          {/* Hamburger Toggle BTN */}
          <button
            aria-controls="sidebar"
            aria-expanded={props.sidebarOpen}
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <MdMenu />
          </button>
          {/* Hamburger Toggle BTN */}
          {/* <Link href="/" className="block flex-shrink-0 lg:hidden">
            <div className=" text- text-white font-medium">CopOfficial</div>
          </Link> */}
        </div>

        <div className="hidden rounded-full bg-bodydark1 px-4 py-2 dark:bg-body dark:text-white sm:block">
          <form>
            <div className="relative ">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <BsSearch />
              </button>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 focus:outline-none dark:placeholder:text-white "
              />
            </div>
          </form>
        </div>
        <div className="hidden sm:block">
          <div
            className="flex cursor-pointer items-center gap-2 font-bold text-warning"
            title="Use this feature only in very critical situations. Overuse may diminish its effectiveness or cause unnecessary alarms."
          >
            <GiHealingShield />
            <div>Protect Me</div>
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <DropdownNotification />
            <DropdownMessage />
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
