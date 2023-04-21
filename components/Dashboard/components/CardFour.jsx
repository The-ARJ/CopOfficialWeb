import React, { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { FcFeedback } from "react-icons/fc";
import ChatBar from "./Chat";
const CardFour = () => {
  const [isLoginBar, setIsLoginBar] = useState(false);
  const toggleLoginBar = () => {
    setIsLoginBar(!isLoginBar);
  };
  return (
    <div className="rounded-3xl  border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <FcFeedback />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            Live Enquiry
          </h4>
          <p className="mt-4 text-lg font-medium">
            Total Enquiry:{" "}
            <span className=" gap-1 fill-meta-3 text-lg font-medium text-meta-3">
              16
            </span>
          </p>
        </div>
        <div onClick={toggleLoginBar} className=" cursor-pointer text-3xl ">
          <BsChatDots />
        </div>
      </div>
      <ChatBar state={isLoginBar} setState={setIsLoginBar} />
    </div>
  );
};

export default CardFour;
