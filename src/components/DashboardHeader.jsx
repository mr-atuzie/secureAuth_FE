import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import filter from "../assets/filter.png";

const DashboardHeader = () => {
  return (
    <div className=" w-full flex justify-between items-end mb-4">
      <h1 className=" text-sm lg:text-base font-semibold  ">
        Hey David Okulola - <br className=" lg:hidden" />
        <span className=" text-[#71717A]">Welcome Back!</span>
      </h1>

      <div className=" hidden lg:flex gap-5">
        <button className=" text-sm lg:text-base px-3  bg-white border border-[#FF5D2E] text-[#FF5D2E]  font-semibold flex justify-center items-center gap-2  rounded-full">
          <img width={15} src={filter} alt="" />
          Filter
        </button>

        <link to={"/dashboard/generate-report"}>
          <button className=" text-sm lg:text-base bg-[#FF5D2E] font-semibold p-2.5  text-white flex justify-center items-center gap-2 rounded-[10px]">
            <IoIosAddCircleOutline size={20} />
            Generating report
          </button>
        </link>
      </div>
    </div>
  );
};

export default DashboardHeader;
