import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const AddUser = () => {
  const navigate = useNavigate();
  return (
    <div className=" font2">
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

      <form className=" lg:w-[55%] mx-auto mt-10">
        <div className="border rounded-[10px] px-3  py-1">
          <label className=" text-[13px] font-semibold mb-1 " htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="  w-full bg-transparent outline-none"
          />
        </div>
        <div className="border rounded-[10px] mt-4 px-3  py-1">
          <label
            className=" text-[13px] font-semibold mb-1 "
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your email address"
            className="  w-full bg-transparent outline-none"
          />
        </div>
      </form>
      <div className=" w-full flex justify-center items-center mt-10 lg:mt-24">
        <button
          onClick={() => navigate("/dashboard/add-user/successfull")}
          className=" lg:w-[637px] mt-8 px-[20px] md:px-[24px] rounded-[12px] py-[10px] md:py-[16px] font-semibold text-white  bg-[#FF5D2E] justify-center items-center flex gap-2"
        >
          Proceed
          <GoArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AddUser;
