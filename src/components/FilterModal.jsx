import React from "react";
import filter from "../assets/filter.png";
import { MdOutlineClose } from "react-icons/md";
import { CgPlayListSearch } from "react-icons/cg";

const FilterModal = ({ setModal, modal }) => {
  return (
    <div className=" w-full max-h-screen fixed top-0 bottom-0  bg-black/30 left-0 flex justify-center items-center">
      <div className=" bg-white rounded-[10px] shadow-md w-[90%] lg:w-[32%] py-3">
        <div className=" flex justify-between px-3 items-center">
          <div className=" flex gap-2 items-center">
            <img width={15} src={filter} alt="" />
            <h1 className=" font-semibold">KPI Fliter</h1>
          </div>

          <MdOutlineClose onClick={() => setModal(!modal)} size={25} />
        </div>
        <hr className=" bg-gray-400  my-2" />

        <div className=" flex gap-2  items-center px-3 ">
          <p className=" font-semibold text-[11px] border-b-2 border-[#FF6634]">
            total till date
          </p>
          <p className=" font-semibold text-[11px] text-gray-400">
            Current day
          </p>
          <p className=" font-semibold text-[11px] text-gray-400">
            Current week
          </p>
          <p className=" font-semibold text-[11px] text-gray-400">
            Current month
          </p>
          <p className=" font-semibold text-[11px] text-gray-400">
            Current year
          </p>
          <p className=" font-semibold text-[11px] text-gray-400">
            weekly trend
          </p>
        </div>
        <hr className=" bg-gray-400 " />

        <div className=" p-3 mt-5">
          <h2 className="font-semibold">Custom range</h2>
          <div className=" bg-gray-300 w-full flex  justify-between items-center p-[1px] rounded-full">
            <div className=" bg-white rounded-full w-[45%] p-2">
              <h1 className=" font-semibold text-[14px]">Start date:</h1>
            </div>
            ---
            <div className=" bg-white rounded-full w-[45%] p-2">
              <h1 className=" font-semibold text-[14px]">End date:</h1>
            </div>
          </div>

          <div className="flex items-center mt-4 gap-6">
            <div className=" flex items-center gap-2">
              <input type="radio" name="p1" id="p1" />
              <label className=" text-xs" htmlFor="p1">
                Value only
              </label>
            </div>
            <div className=" flex items-center gap-2">
              <input type="radio" name="p1" id="p1" />
              <label className=" text-xs" htmlFor="p1">
                Count only
              </label>
            </div>
          </div>

          <div className=" flex justify-between items-center mt-10">
            <button className="py-2 px-4 border border-[#FF6634] text-sm font-semibold text-[#FF6634] rounded-full">
              Reset
            </button>

            <button className="bg-[#FF6634] flex items-center gap-1 text-sm font-semibold text-white rounded-full p-2">
              <CgPlayListSearch size={20} />
              <p>Show result</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
