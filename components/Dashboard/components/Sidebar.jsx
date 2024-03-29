import React, { useState, useEffect, useRef, useContext } from "react";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Link from "next/link";
import styles from "../../../app/sidebar.module.css";
import { usePathname, useRouter } from "next/navigation";
import {
  MdArrowDropDown,
  MdCallToAction,
  MdDashboard,
  MdLocalPolice,
  MdLogout,
  MdSettings,
} from "react-icons/md";
import { FaNewspaper, FaSuitcase, FaUser, FaUserCircle } from "react-icons/fa";
import { UserContext } from "../../../utils/UserContext";
import { GiPoliceBadge } from "react-icons/gi";
import { RiCriminalFill } from "react-icons/ri";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, error, logout } = useContext(UserContext);
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded =
    typeof window !== "undefined" && localStorage.getItem("sidebar-expanded");
  const initialSidebarExpanded =
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    initialSidebarExpanded
  );

  const toggleSidebarOpen = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarExpanded ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarExpanded(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarExpanded]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarExpanded || keyCode !== 27) return;
      setSidebarExpanded(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarExpanded ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <>
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link href="/dashboard">
            <div className="k flex items-center gap-2 text-3xl font-medium text-white">
              <MdLocalPolice /> CopOfficial
            </div>
          </Link>

          <button
            ref={trigger}
            onClick={toggleSidebarOpen}
            aria-controls="sidebar"
            aria-expanded={sidebarExpanded}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        <div
          className={`no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear ${styles.sidebar}`}
        >
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                MENU
              </h3>

              <ul className="mb-6 flex flex-col gap-1.5">
                <SidebarLinkGroup
                  activeCondition={
                    pathname === "/" || pathname.includes("dashboard")
                  }
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <Link
                          href="/dashboard"
                          className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                            (pathname === "/" ||
                              pathname.includes("dashboard")) &&
                            "bg-graydark dark:bg-meta-4"
                          }`}
                        >
                          <MdDashboard />
                          Dashboard
                        </Link>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>
                <SidebarLinkGroup
                  activeCondition={
                    pathname === "/complaint" || pathname.includes("complaint")
                  }
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <Link
                          href="#"
                          className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                            (pathname === "/complaint" ||
                              pathname.includes("forms")) &&
                            "bg-graydark dark:bg-meta-4"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded
                              ? handleClick()
                              : setSidebarExpanded(true);
                          }}
                        >
                          <MdCallToAction />
                          Actions
                          <MdArrowDropDown
                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                              open && "rotate-180"
                            }`}
                          />
                        </Link>
                        <div
                          className={`translate transform overflow-hidden text-bodydark2 ${
                            !open && "hidden"
                          }`}
                        >
                          <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                            <li className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white">
                              <Link href="/complaint">Complaint</Link>
                            </li>
                            <li className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white">
                              <Link href="/forms/form-elements">
                                Live Enquiry
                              </Link>
                            </li>
                            <li className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white">
                              <Link href="/crime-report">Crime Reporting</Link>
                            </li>
                            <li className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white">
                              <Link href="/forms/form-layout">
                                First Information Report
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>
                <li>
                  <Link
                    href="/case-management"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("cases") && "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <FaSuitcase />
                    Case Management
                  </Link>
                </li>
                {user && (user.role === "police" || user.role === "admin") && (
                  <>
                    <li>
                      <Link
                        href="/criminal-management"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname.includes("cases") &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                      >
                        <RiCriminalFill />
                        Criminal Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/police-management"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname.includes("cases") &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                      >
                        <GiPoliceBadge />
                        Police Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/user-management"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname.includes("cases") &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                      >
                        <FaUserCircle />
                        User Management
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                OTHERS
              </h3>

              <ul className="mb-6 flex flex-col gap-1.5">
                <li>
                  <Link
                    href="/profile"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("profile") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <FaUser />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("news") && "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <FaNewspaper />
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname.includes("settings") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    <MdSettings />
                    Settings
                  </Link>
                </li>
                <li>
                  <div
                    onClick={handleLogout}
                    className={`group relative  flex cursor-pointer items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
                  >
                    <MdLogout />
                    Log Out
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    </aside>
  );
};

export default Sidebar;
