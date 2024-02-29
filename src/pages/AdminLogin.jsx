import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

const AdminLogin = () => {
  return (
    <div className=" w-full min-h-screen bg-[#F7F9FC] flex justify-center  items-center mx-auto ">
      <div className=" fixed top-8 left-8">Go back</div>
      <div className=" h-[476px] w-[456px] ">
        <form className=" bg-white w-full h-full border border-[#D0D5DD] py-[32px] px-[28px] shadow-md rounded-xl ">
          <h1 className=" text-[28px] font-medium text-center">
            Login in as Admin
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
            <div className=" w-full flex justify-center items-center border border-[#FFEFEA] p-3  rounded-md">
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
            className=" flex flex-col gap-2 mt-5
          "
          >
            <label
              className=" uppercase tracking-wide text-xs font-semibold "
              htmlFor="email"
            >
              Password
            </label>
            <div className=" w-full flex justify-center items-center border p-3 border-[#FFEFEA] rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter password"
                type="email"
                name="email"
                id="email"
              />
              <FaRegEyeSlash size={20} className=" text-gray-500" />
            </div>
          </div>

          <p className=" text-[#FF6634] text-right w-full my-3 text-sm font-semibold">
            Forget password?
          </p>

          <button className=" w-full mt-8 px-[24px] rounded-[12px] py-[16px] font-semibold bg-[#FF5D2E]  text-white justify-center items-center flex gap-4">
            Log into Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
