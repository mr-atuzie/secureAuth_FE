import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const GroupLogin = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full min-h-screen bg-[#F7F9FC] flex justify-center  items-center mx-auto ">
      <button
        onClick={() => navigate(-1)}
        className=" fixed flex font-semibold items-center justify-center gap-2 top-8 left-8"
      >
        <IoIosArrowBack />
        Go back
      </button>
      <div className=" h-[476px] w-[456px] ">
        <form className=" bg-white w-full h-full border border-[#D0D5DD] py-[32px] px-[28px] shadow-md rounded-xl ">
          <h1 className=" text-[28px] font-medium text-center">
            Log in into Group
          </h1>
          <p className=" text-base text-[#667185] text-center">
            Enter your credentials to access your dashboard
          </p>

          <div
            className=" flex flex-col gap-2 mt-10
          "
          >
            <label
              className=" tracking-wide uppercase text-xs font-semibold "
              htmlFor="email"
            >
              email address
            </label>
            <div className=" w-full flex justify-center items-center border border-[#FCB59A] p-4  rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter your work email address"
                type="email"
                name="email"
                id="email"
              />
              <MdOutlineEmail size={20} className=" text-gray-500" />
            </div>
          </div>

          <div
            className=" flex flex-col gap-2 mt-6
          "
          >
            <label
              className=" uppercase tracking-wide text-xs font-semibold "
              htmlFor="password"
            >
              Password
            </label>
            <div className=" w-full flex justify-center items-center border p-4 border-[#FCB59A] rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter password"
                type="password"
                name="password"
                id="password"
              />
              <FaRegEyeSlash size={20} className=" text-gray-500" />
            </div>
          </div>

          <Link to={"/forget-password"}>
            <p className=" text-[#CC400C] text-right w-full my-3 text-sm font-semibold">
              Forget password?
            </p>
          </Link>

          <button
            onClick={() => navigate("/dashboard")}
            className=" w-full mt-8 px-[24px] rounded-[12px] py-[16px] font-semibold bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
          >
            Log into Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default GroupLogin;
