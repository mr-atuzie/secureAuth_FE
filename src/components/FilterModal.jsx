import React from "react";
import filter from "../assets/filter.png";
import { MdOutlineClose } from "react-icons/md";

const FilterModal = ({ setModal, modal }) => {
  return (
    <div className=" w-full max-h-screen fixed top-0 bottom-0 bg-black/30 left-0 flex justify-center items-center">
      <div className=" bg-white rounded-[10px] shadow-md w-[90%] lg:w-[30%] py-3">
        <div className=" flex justify-between px-3 items-center">
          <div className=" flex gap-2 items-center">
            <img width={15} src={filter} alt="" />
            <h1 className=" font-semibold">KPI Fliter</h1>
          </div>

          <MdOutlineClose onClick={() => setModal(!modal)} size={25} />
        </div>
        <hr className=" bg-gray-400  my-2" />
      </div>
    </div>
  );
};

export default FilterModal;
