import React from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeCloseLine } from "react-icons/ri";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full min-h-screen bg-[#F7F9FC] flex justify-center  items-center mx-auto ">
      <div className=" lg:h-[476px] w-full h-full lg:w-[456px] bg-white border shadow-md rounded-xl ">
        <form className=" w-full h-full  py-[32px] px-[28px]  ">
          <h1 className=" font3 text-[20px] lg:text-[28px] font-medium text-center">
            Reset Password
          </h1>
          <p className=" text-xs lg:text-base text-[#667185] text-center">
            Reset your password. Go ahead and set a new password
          </p>

          <div
            className=" flex flex-col gap-2 mt-10 
          "
          >
            <label
              className=" tracking-wide capitalize text-xs lg:text-sm font-medium "
              htmlFor="password"
            >
              new password
            </label>
            <div className=" bg-white w-full -mt-1 flex justify-center items-center border-2 border-[#FCB59A] p-3.5  rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Enter your new password"
                type="password"
                name="password"
                id="password"
              />
              <RiEyeCloseLine size={15} className=" text-gray-500" />
            </div>
          </div>

          <div
            className=" flex flex-col gap-2 mt-5 
          "
          >
            <label
              className=" tracking-wide capitalize text-xs lg:text-sm font-medium "
              htmlFor="password"
            >
              confirm password
            </label>
            <div className=" bg-white w-full flex justify-center items-center border-2 border-[#FCB59A] p-3.5  rounded-md">
              <input
                className=" w-full outline-none border-none placeholder:font-normal placeholder:text-sm placeholder:text-gray-400 "
                placeholder="Confirm your new password"
                type="password"
                name="password"
                id="password"
              />
              <RiEyeCloseLine size={15} className=" text-gray-500" />
            </div>
          </div>

          <button
            onClick={() => navigate("/password-changed")}
            className=" w-full mt-8 px-[24px] rounded-[12px] py-[16px] font-semibold bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
