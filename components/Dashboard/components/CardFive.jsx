import React from "react";
import { GiHealingShield } from "react-icons/gi";
const CardFive = () => {
  return (
    <div className="rounded-3xl border border-stroke bg-warning px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-warning md:hidden">
      <div className="">
        <div className=" flex justify-between">
          <h4 className="text-title-md font-bold text-black dark:text-white">
            Protect Me
          </h4>
          <div className="cursor-pointer text-3xl text-white">
            <GiHealingShield />
          </div>
        </div>
        <p className="mt-4 text-sm text-black dark:text-white">
          Please note: This feature is intended for use only in very critical
          situations. Overuse may diminish its effectiveness or cause
          unnecessary alarms.
        </p>
      </div>
    </div>
  );
};

export default CardFive;
