import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const AddUserOption = () => {
  const navigate = useNavigate();
  return (
    <div className="font2 ">
      <button
        onClick={() => navigate(-1)}
        className="  text-sm lg:text-base flex font-semibold items-center justify-center gap-2 "
      >
        <IoIosArrowBack />

        <span className=" underline"> Back</span>
      </button>

      <div className=" my-4">
        <h1 className=" text-[20px] lg:text-[28px] font-semibold text-center">
          Add a new user
        </h1>
        <p className=" text-xs lg:text-base text-[#667185] text-center -mt-1">
          Select the business you want to add the user to
        </p>
      </div>

      <div className=" lg:w-[65%] mx-auto grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8  items-center justify-center">
        <div className="  border-2 border-[#FFCDBE] border-dashed w-[340px] h-[120px] lg:h-[164px] shadow-sm flex flex-col justify-center rounded-md px-3 lg:px-5">
          <h3 className=" font-semibold">Group</h3>
          <div className=" flex gap-5">
            <p className=" text-sm text-[#707070] ">
              Select the group business as the business you want the user to
              have privilege to
            </p>

            <input
              className="  accent-[#FF5D2E]"
              type="radio"
              name="group"
              id="group"
            />
          </div>
        </div>
        <div className="  border-2 border-[#FFCDBE] border-dashed w-[340px] h-[120px] lg:h-[164px] shadow-sm flex flex-col justify-center rounded-md px-3 lg:px-5">
          <h3 className=" font-semibold">Bank</h3>
          <div className=" flex gap-5">
            <p className=" text-sm text-[#707070] ">
              Select bank as business the business you want the user to have
              privilege to
            </p>

            <input
              className="  accent-[#FF5D2E]"
              type="radio"
              name="group"
              id="group"
            />
          </div>
        </div>
        <div className="  border-2 border-[#FFCDBE] border-dashed w-[340px] h-[120px] lg:h-[164px] shadow-sm flex flex-col justify-center rounded-md px-3 lg:px-5">
          <h3 className=" font-semibold">Payment Gateway</h3>
          <div className=" flex gap-5">
            <p className=" text-sm text-[#707070] ">
              Select payment gateway business as the business you want the user
              to have privilege to
            </p>

            <input
              className="  accent-[#FF5D2E]"
              type="radio"
              name="group"
              id="group"
            />
          </div>
        </div>
        <div className="  border-2 border-[#FFCDBE] border-dashed w-[340px] h-[120px] lg:h-[164px] shadow-sm flex flex-col justify-center rounded-md px-3 lg:px-5">
          <h3 className=" font-semibold">Social marketplace</h3>
          <div className=" flex gap-5">
            <p className=" text-sm text-[#707070] ">
              Select the social marketplace business as the business you want
              the user to have privilege to
            </p>

            <input
              className="  accent-[#FF5D2E]"
              type="radio"
              name="group"
              id="group"
            />
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-center items-center mt-10 lg:mt-24">
        <button
          onClick={() => navigate("/dashboard/add-user")}
          className=" lg:w-[637px] mt-8 px-[20px] md:px-[24px] rounded-[12px] py-[10px] md:py-[16px] font-semibold text-white  bg-[#FF5D2E] justify-center items-center flex gap-2"
        >
          Proceed
          <GoArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AddUserOption;
