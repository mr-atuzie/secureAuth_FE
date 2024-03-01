import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const ForgotPaasword = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full min-h-screen bg-[#F7F9FC] flex justify-center  items-center mx-auto ">
      <div className=" h-[476px] w-[456px] ">
        <form className=" w-full h-full  py-[32px] px-[28px]  ">
          <h1 className=" text-[28px] font-medium text-center">
            Forgot Password
          </h1>
          <p className=" text-base text-[#667185] text-center">
            Ouch sorry, you forgot your password. kindly enter your email
            address to get a reset link
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
            <div className=" bg-white w-full flex justify-center items-center border border-[#FCB59A] p-3.5  rounded-md">
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

          <button
            onClick={() => navigate("/reset-email")}
            className=" w-full mt-16 px-[24px] rounded-[12px] py-[16px] font-semibold bg-[#FF5D2E]  text-white justify-center items-center flex gap-4"
          >
            Send reset Instruction
          </button>
          <Link to={"/"}>
            <p className=" text-gray-500  text-center w-full my-6 text-sm font-semibold">
              Remeber your password?{" "}
              <span className="text-[#FF6634] ml-1">Click here</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPaasword;
