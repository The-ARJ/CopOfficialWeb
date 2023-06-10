import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import styles from "../../../app/sidebar.module.css";

const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="ove dark:bg-boxdark-2 dark:text-bodydark">
      <div className={`flex h-screen overflow-hidden`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div
          className={`relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ${styles.sidebar}`}
        >
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
